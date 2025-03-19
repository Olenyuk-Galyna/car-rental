import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./CarDetailsPage.module.css";
import { Formik, Form, Field } from "formik";
// import FavoriteBtn from "../../components/FavoriteBtn/FavoriteBtn";

const makeLocation = (fullLocation) => {
  const splitedLocation = fullLocation.split(", ");
  return splitedLocation[1] + ", " + splitedLocation[2];
};

const CarDetailsPage = () => {
  const { carId } = useParams();
  const [carInfo, setCarInfo] = useState(null);

  const initialValues = {
    username: "",
    email: "",
    date: "",
    message: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    // actions.carInfo();
  };

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
        <div className={css.imgFormWraper}>
          <div className={css.carBrand}>
            <img src={carInfo.img} alt={carInfo.brand} />
          </div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.formConnected}>
              <h2 className={css.carTitle}>Book your car now</h2>
              <p className={css.subTitle}>
                Stay connected! We are always ready to help you.
              </p>
              <Field
                className={css.fieldInput}
                type="text"
                name="username"
                placeholder="Name*"
              />
              <Field
                className={css.fieldInput}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <Field
                className={css.fieldInput}
                type="date"
                name="date"
                placeholder="Booking date"
              />
              <Field
                className={css.fieldComment}
                type="text"
                name="message"
                placeholder="Comment"
              />
              <button className={css.btnInputForm} type="submit">
                Send
              </button>
            </Form>
          </Formik>
        </div>
        <div className={css.descrWraper}>
          <div>
            <p className={css.mainTitle}>
              {carInfo.brand} {carInfo.model}, {carInfo.year}
              <span className={css.idTitle}>id: {carId.slice(0, 4)}</span>
            </p>
            <p className={css.carInfo}>
              <svg>
                <use href="/public/icons/sprite.svg#icon-location"></use>
              </svg>
              <span className={css.addressLocation}>
                {makeLocation(carInfo.address)}
              </span>
              <span> Mileage: {carInfo.mileage} km</span>
            </p>
            <p className={css.rentalPrice}>
              <span>${carInfo.rentalPrice}</span>
            </p>
            <p className={css.carDescr}>{carInfo.description}</p>
          </div>

          <div className={css.containerBlocWrap}>
            <p className={css.carInfoDetails}>Rental Conditions:</p>
            <ul>
              {carInfo.rentalConditions.map((el) => (
                <li className={css.rentalConditionsList}>
                  <svg>
                    <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                  </svg>
                  <span> {el} </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.carSpecificationsList}>
            <p className={css.carInfoDetails}>Car Specifications:</p>
            <ul>
              <li>
                <svg>
                  <use href="/public/icons/sprite.svg#icon-calendar"></use>
                </svg>
                <span> Year: {carInfo.year} </span>
              </li>
              <li>
                <svg>
                  <use href="/public/icons/sprite.svg#icon-car"></use>
                </svg>
                <span> Type: {carInfo.tupe}</span>
              </li>
              <li>
                <svg>
                  <use href="/public/icons/sprite.svg#icon-pump"></use>
                </svg>
                <span> Fuel Consumption: {carInfo.fuelConsumption}</span>
              </li>
              <li>
                <svg>
                  <use href="/public/icons/sprite.svg#icon-settings"></use>
                </svg>
                <span> Engine Size: {carInfo.engineSize}</span>
              </li>
            </ul>
          </div>
          <div className={css.contentBlocWrap}>
            <p className={css.carInfoDetails}>
              Accessories and functionalities:
            </p>
            <ul>
              {[...carInfo.accessories, ...carInfo.functionalities].map(
                (el) => (
                  <li className={css.accessoriesFuncionalList}>
                    <svg>
                      <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                    </svg>
                    <span> {el} </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default CarDetailsPage;
