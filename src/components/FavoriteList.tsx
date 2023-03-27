import { Link } from "react-router-dom";
import FavoriteRepo from "./FavoriteRepo";

function FavoriteList() {
  return (
    <div>
      <Link to="/">Buscador</Link>
      <h1>Repositorios favoritos:</h1>
      <div>
        <FavoriteRepo />
      </div>
    </div>
  );
}

export default FavoriteList;
