import clsx from "clsx";
import css from "./FavoriteBtn.module.css";

function FavoriteBtn({ isFavorite, onClick }) {
  return (
    <button className={css.favoriteBtn} type="button" onClick={onClick}>
      <svg className={clsx(isFavorite && css.favorite)}>
        <use
          href={
            !isFavorite
              ? "/public/icons/sprite.svg#icon-heart-default"
              : "/public/icons/sprite.svg#icon-heart-active"
          }
        ></use>
      </svg>
    </button>
  );
}

export default FavoriteBtn;
