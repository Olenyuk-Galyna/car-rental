import React from "react";
import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={css.backgroundContainer}>
      <p className={css.title}>Find your perfect rental car</p>
      <p className={css.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <button
        className={css.mainButton}
        type="button"
        onClick={() => {
          navigate("/catalog");
        }}
      >
        View Catalog
      </button>
    </div>
  );
};

export default HomePage;
