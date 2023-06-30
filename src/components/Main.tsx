import { useState } from "react";
import { Link } from "react-router-dom";
import useField from "../hooks/useField";
import { useFetchRepositories } from "../hooks/useRepositories";
import { useFavoriteRepos } from "../store/favoriteRepos";
import Card from "./Card";
import Loading from "./Loading";
import style from "./Main.module.css";

function Main() {
  const [username, setUsername] = useState("");

  const { favoriteRepos } = useFavoriteRepos((state) => ({
    favoriteRepos: state.favoriteRepos,
  }));

  const user = useField({ type: "text", name: "user" });

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if(!user.value) return
    await setUsername(user.value);
    refetch()
  };

  const { data, isLoading, isError, refetch } = useFetchRepositories(username)

  if (!username) {
    return (
      <div className={style.main}>
        <div className={style["form-container"]}>
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              className={style["form-input"]}
              {...user}
              placeholder="Enter an user"
            ></input>
            <button className={style["form-button"]}></button>
          </form>
          <Link className={style["favs-link"]} to="/favorites">
            Favs Repos
          </Link>
        </div>
        <div className={style["icon-container"]}>
          <img
            className={style.icon}
            src="https://cdn-icons-png.flaticon.com/512/4494/4494756.png"
          />
          <p>Provide an user...</p>
        </div>
      </div>
    );
  }
  return (
    <div className={style.main}>
      <div className={style["form-container"]}>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            className={style["form-input"]}
            {...user}
            placeholder="Ingrese su usuario"
          ></input>
          <button className={style["form-button"]}></button>
        </form>
        <Link className={style["favs-link"]} to="/favorites">
          Favs Repos
        </Link>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={style["repos-container"]}>
          {data?.map((repository) => {
            const objectToFindString = JSON.stringify(repository);
            return (
              <Card
                repository={repository}
                key={repository.id}
                isFavorite={favoriteRepos.some(
                  (obj) => JSON.stringify(obj) === objectToFindString
                )}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Main;
