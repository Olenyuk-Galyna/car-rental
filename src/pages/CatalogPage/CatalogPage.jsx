import React, { useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import CarsList from "../../components/CarsList/CarsList";
import { useDispatch, useSelector } from "react-redux";
import { getCarsList } from "../../redux/carsList/carsListOperation";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const carsList = useSelector((state) => state.carsList.list);

  useEffect(() => {
    dispatch(getCarsList());
  }, []);

  return (
    <div>
      <Filters />
      <CarsList list={carsList} />
      <button type="submit">Load more</button>
    </div>
  );
};

export default CatalogPage;
