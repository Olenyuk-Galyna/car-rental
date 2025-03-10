import React from "react";
import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <div>
      <button className={css.btn} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
