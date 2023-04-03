import { Link } from "react-router-dom";
import { useFavoriteRepos } from "../store/favoriteRepos";
import style from "./FavoriteRepo.module.css";
function FavoriteRepo() {
  const { favoriteRepos } = useFavoriteRepos();

  const { removeFavoriteRepo } = useFavoriteRepos((state) => ({
    addFavoriteRepo: state.addFavoriteRepo,
    removeFavoriteRepo: state.removeFavoriteRepo,
  }));

  return (
    <div className={style.container}>
      {favoriteRepos.map((repo) => (
        <div className={style.repo} key={repo.id}>
          <a
            className={style["repo-link"]}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.name}
          </a>
          <a
            className={style["user-link"]}
            href={repo.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Owner: {repo.owner.login}
          </a>
          <button
            className={style.button}
            onClick={() => removeFavoriteRepo(repo)}
          >
            Dislike
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteRepo;
