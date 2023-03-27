import { Repository } from "../hooks/types";
import { useFavoriteRepos } from "../store/favoriteRepos";

type CardProps = {
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
      removeFavoriteRepo(repository.id, repository.html_url);
      return;
    }
    addFavoriteRepo(repository.id, repository.html_url);
  };

  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={handleFavorite}>
        {isFavorite ? "dislike" : "like"}
      </button>
    </div>
  );
}

export default Card;
