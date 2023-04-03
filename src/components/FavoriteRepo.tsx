import { Link } from "react-router-dom";
import { useFavoriteRepos } from "../store/favoriteRepos";
function FavoriteRepo() {
  const { favoriteRepos } = useFavoriteRepos();

  return (
    <div>
      {favoriteRepos.map((repo) => (
        <div key={repo.id}>
          <Link style={{ color: "#f9f9f9" }} to={repo.html_url}>
            {repo.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FavoriteRepo;
