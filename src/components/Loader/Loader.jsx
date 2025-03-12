import React from "react";
import css from "./Loader.module.css";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <BarLoader
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
