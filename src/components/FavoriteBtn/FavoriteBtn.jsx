import css from "./FavoriteBtn.module.css";

function FavoriteBtn({ isFavorite }) {
  return (
    <button className={css.favoriteBtn} type="button">
      <svg>
        <use
          href={
            isFavorite
              ? "/public/icons/sprite.svg#icon-heart-default"
              : "/public/icons/sprite.svg#icon-heart-active"
          }
        ></use>
      </svg>
    </button>
  );
}

export default FavoriteBtn;
