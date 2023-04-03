import Card from "./Card";
import { useFetchRepositories } from "../hooks/useRepositories";
import { useFavoriteRepos } from "../store/favoriteRepos";
import useField from "../hooks/useField";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Main.module.css";
import Loading from "./Loading";

function Main() {
  const [username, setUsername] = useState("");

  const { favoriteRepos } = useFavoriteRepos((state) => ({
    favoriteRepos: state.favoriteRepos,
  }));

  const user = useField({ type: "text", name: "user" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setUsername(user.value);
  };
  const { data, isLoading } = useFetchRepositories(username);
  if (!username) {
    return (
      <div className={style.main}>
        <div className={style["form-container"]}>
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              className={style["form-input"]}
              {...user}
              placeholder="Ingrese su usuario"
            ></input>
            <button className={style["form-button"]}>Buscar</button>
          </form>
          <Link className={style["favs-link"]} to="/favorites">
            Mis favoritos
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
          <button className={style["form-button"]}>Buscar</button>
        </form>
        <Link className={style["favs-link"]} to="/favorites">
          Mis favoritos
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
