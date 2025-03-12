import { useDispatch, useSelector } from "react-redux";
import css from "./Filters.module.css";
import { setFilterAction } from "../../redux/filters/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilterAction({ name, value }));
  };

  return (
    <form className={css.catalogBloc}>
      <label>
        <span className={css.carBrand}>Car brand</span>
        <input
          className={css.chooseBrand}
          type="text"
          name="brand"
          value={filter.brand}
          onChange={handleChange}
          placeholder="Choose a brand"
        ></input>
      </label>
      <label>
        <span className={css.hourPrice}>Price/ 1 hour</span>
        <input
          className={css.choosePrice}
          type="text"
          name="rentalPrice"
          value={filter.rentalPrice}
          onChange={handleChange}
          placeholder="Choose a price"
        ></input>
      </label>
      <label>
        <span className={css.carMileage}>Сar mileage / km</span>
        <input
          className={css.carMileageFrom}
          type="text"
          name="minMileage"
          value={filter.minMileage}
          onChange={handleChange}
          placeholder="From"
        ></input>
      </label>

      <input
        className={css.carMileageTo}
        type="text"
        name="maxMileage"
        value={filter.maxMileage}
        onChange={handleChange}
        placeholder="To"
      ></input>

      <button className={css.btnSearch} type="submit">
        Search
      </button>
    </form>
  );
};

export default Filters;
