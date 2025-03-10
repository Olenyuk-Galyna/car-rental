import React from "react";
import css from "./Loader.module.css";
import { RotatingLines } from "react-spinner";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
