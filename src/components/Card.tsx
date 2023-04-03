import { Repository } from "../hooks/types";
import { useFavoriteRepos } from "../store/favoriteRepos";
import style from "./Card.module.css";

export type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

function Card({ repository, isFavorite }: CardProps) {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteRepos((state) => ({
    addFavoriteRepo: state.addFavoriteRepo,
    removeFavoriteRepo: state.removeFavoriteRepo,
  }));

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository);
      return;
    }
    addFavoriteRepo(repository);
  };

  return (
    <div className={style.container}>
      <div className={style["avatar-container"]}>
        <img src={repository.owner.avatar_url} className={style.avatar} />
      </div>
      <div className={style["body-container"]}>
        <h3 className={style.title}>{repository.name}</h3>
        <p className={style.lenguage}>
          Main language:
          <a
            className={style["link-language"]}
            href={`https://www.google.com/search?q=${repository.language}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;{repository.language}
          </a>
        </p>
        <p className={style.description}>
          {repository.description ? repository.description : "No description."}
        </p>
        <button
          className={`${style["like-button"]} ${style.button}`}
          onClick={handleFavorite}
        >
          {isFavorite ? "Dislike" : "Like"}
        </button>
      </div>
    </div>
  );
}

export default Card;
