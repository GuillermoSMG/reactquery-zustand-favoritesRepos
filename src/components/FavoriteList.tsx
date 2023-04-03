import { Link } from "react-router-dom";
import FavoriteRepo from "./FavoriteRepo";
import style from "./FavoriteRepos.module.css";

function FavoriteList() {
  return (
    <div>
      <div className={style["title-container"]}>
        <h1 className={style.title}>Favorite repos</h1>
        <Link className={style["search-link"]} to="/">
          Home
        </Link>
      </div>
      <div>
        {FavoriteRepo.length > 0 ? (
          <FavoriteRepo />
        ) : (
          <div className={style["icon-container"]}>
            <img
              className={style.icon}
              src="https://cdn-icons-png.flaticon.com/512/4494/4494756.png"
            />
            <p>Liked some repos...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteList;
