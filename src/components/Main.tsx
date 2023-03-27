import Card from "../components/Card";
import { useFetchRepositories } from "../hooks/useRepositories";
import { useFavoriteRepos } from "../store/favoriteRepos";
import useField from "../hooks/useField";
import { useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [username, setUsername] = useState("");

  const { favoriteReposIds } = useFavoriteRepos();

  const user = useField({ type: "text", name: "user" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setUsername(user.value);
  };

  const { data, isLoading } = useFetchRepositories(username);

  if (!username) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <input {...user} placeholder="Ingrese su usuario"></input>
          <button>buscar</button>
        </form>
        <Link to="/favorites">Mis favoritos</Link>
      </div>
    );
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <input {...user} placeholder="Ingrese su usuario"></input>
          <button>buscar</button>
        </form>
        <Link to="/favorites">Mis favoritos</Link>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((repository) => (
          <Card
            repository={repository}
            key={repository.id}
            isFavorite={favoriteReposIds.includes(repository.id)}
          />
        ))
      )}
    </div>
  );
}

export default Main;
