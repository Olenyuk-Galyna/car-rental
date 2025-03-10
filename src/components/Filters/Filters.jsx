import css from "./Filters.module.css";

const Filters = () => {
  return (
    <form className={css.catalogBloc}>
      <input
        className={css.chooseBrand}
        type="text"
        placeholder="Choose a brand"
      ></input>
      <input
        className={css.choosePrice}
        type="text"
        placeholder="Choose a price"
      ></input>

      <input
        className={css.carMileageFrom}
        type="text"
        placeholder="From"
      ></input>
      <input className={css.carMileageTo} type="text" placeholder="To"></input>
      <button className={css.btnSearch} type="submit">
        Search
      </button>
    </form>
  );
};

export default Filters;
