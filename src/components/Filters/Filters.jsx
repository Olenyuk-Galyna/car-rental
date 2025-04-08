import { useDispatch, useSelector } from "react-redux";
import css from "./Filters.module.css";
import { setFilterAction } from "../../redux/filters/filtersSlice";
import { useEffect, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { getCarsList } from "../../redux/carsList/carsListOperation";

const prices = Array(20)
  .fill(null)
  .map((_, idx) => {
    return (idx + 1) * 10;
  });

const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [brands, setBrands] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilterAction({ name, value }));
  };

  const handleChangeBrand = (brand) => {
    dispatch(setFilterAction({ name: "brand", value: brand }));
    setIsBrandOpen(false);
  };

  const handleChangePrice = (price) => {
    dispatch(setFilterAction({ name: "rentalPrice", value: price }));
    setIsPriceOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCarsList({ page: 1, ...filter }));
  };
  useEffect(() => {
    axios
      .get("https://car-rental-api.goit.global/brands")
      .then(({ data }) => {
        setBrands(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <form className={css.catalogBloc} onSubmit={handleSubmit}>
        <div className={css.brandWrap}>
          <label>
            <span className={css.carBrand}>Car brand</span>
          </label>

          <div
            className={css.chooseBrand}
            onClick={() => setIsBrandOpen(!isBrandOpen)}
          >
            {filter.brand || "Choose a brand"}
            <svg className={clsx(css.arrowIcon, isBrandOpen && css.rotate)}>
              <use href="/icons/sprite.svg#icon-check-default"></use>
            </svg>
          </div>

          {isBrandOpen && brands.length > 0 && (
            <ul className={css.dropdownList}>
              {brands.map((brand) => (
                <li
                  key={brand}
                  onClick={() => handleChangeBrand(brand)}
                  className={css.dropdownItem}
                >
                  {brand}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={css.priceWrap}>
          <label>
            <span className={css.hourPrice}>Price/ 1 hour</span>
          </label>

          <div
            className={css.choosePrice}
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            {filter.rentalPrice || "Choose Price"}
            <svg className={clsx(css.arrowIcon, isPriceOpen && css.rotate)}>
              <use href="/icons/sprite.svg#icon-check-default"></use>
            </svg>
          </div>

          {isPriceOpen && (
            <ul className={css.dropdownList}>
              {prices.map((price) => (
                <li
                  key={price}
                  onClick={() => handleChangePrice(price)}
                  className={css.dropdownItem}
                >
                  {price}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={css.mileagWrap}>
          <div>
            <label>
              <span className={css.carMileage}>Car mileage / km</span>
            </label>
            <input
              className={css.carMileageFrom}
              type="text"
              name="minMileage"
              value={filter.minMileage}
              onChange={handleChange}
              placeholder="From"
            ></input>
          </div>

          <div>
            <input
              className={css.carMileageTo}
              type="text"
              name="maxMileage"
              value={filter.maxMileage}
              onChange={handleChange}
              placeholder="To"
            ></input>
          </div>
        </div>

        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
