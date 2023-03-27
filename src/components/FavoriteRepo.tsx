import { Link } from "react-router-dom";
import { useFavoriteRepos } from "../store/favoriteRepos";
function FavoriteRepo() {
  const { favoriteReposURLs } = useFavoriteRepos();

  return (
    <div>
      {favoriteReposURLs.map((repo) => (
        <div>
          <Link style={{ color: "#f9f9f9" }} to={repo}>
            {repo}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FavoriteRepo;
