import React, { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import CarsList from "../../components/CarsList/CarsList";
import { useDispatch, useSelector } from "react-redux";
import { getCarsList } from "../../redux/carsList/carsListOperation";
import css from "../CatalogPage/CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const carsList = useSelector((state) => state.carsList.list);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getCarsList({ page }));
  }, [page]);

  return (
    <div>
      <Filters />
      <CarsList list={carsList} />
      <button
        className={css.loadMore}
        type="button"
        onClick={() => {
          setPage((prevPage) => prevPage + 1);
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default CatalogPage;
