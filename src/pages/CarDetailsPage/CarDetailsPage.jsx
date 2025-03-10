import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./CarDetailsPage.module.css";

const CarDetailsPage = () => {
  // const carsList = useSelector((state) => state.carsList.list);
  const { carId } = useParams();
  const [carInfo, setCarInfo] = useState(null);
  useEffect(() => {
    const getCarInfo = () => {
      return axios.get(`https://car-rental-api.goit.global/cars/${carId}`);
    };
    getCarInfo()
      .then((res) => {
        setCarInfo(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log("carInfo", carInfo);
  return (
    carInfo && (
      <div className={css.container}>
        Brand:
        {carInfo.brand}
      </div>
    )
  );
};

export default CarDetailsPage;
