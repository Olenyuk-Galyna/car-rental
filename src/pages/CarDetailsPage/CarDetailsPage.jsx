import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./CarDetailsPage.module.css";
import { Formik, Form, Field } from "formik";

// const carInfo = [
//   "Aston Martin",
//   "Audi",
//   "BMW",
//   "Bentley",
//   "Buick",
//   "Chevrolet",
//   "Chrysler",
//   "GMC",
//   "HUMMER",
//   "Hyundai",
//   "Kia",
//   "Lamborghini",
//   "Land Rover",
//   "Lincoln",
//   "MINI",
//   "Mercedes-Benz",
//   "Mitsubishi",
//   "Nissan",
//   "Pontiac",
//   "Subaru",
//   "Volvo",
// ];

const makeLocation = (fullLocation) => {
  const splitedLocation = fullLocation.split(", ");
  return splitedLocation[1] + ", " + splitedLocation[2];
};

const CarDetailsPage = () => {
  // const carsList = useSelector((state) => state.carsList.list);
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
                type="text"
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
          <div className={css.contentWrap}>
            <p className={css.mainTitle}>
              {carInfo.brand} {carInfo.model}, {carInfo.year}
              <span className={css.idTitle}>id:9582</span>
            </p>
            <p className={css.carInfo}>
              <svg className={css.iconLocation}>
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
          <div className={css.contentBlockWrap}>
            <ul>
              <p className={css.carInfoDetails}>Rental Conditions:</p>
              <li>
                <svg className={css.iconCheckCircle}>
                  <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                </svg>
                <span> {carInfo.rentalConditions}Minimum age: 25 </span>
              </li>
              <li className={css.infoContent}>Security deposite required</li>
              <li>Valid driver’s license</li>
            </ul>
          </div>
          <div className={css.contentBlockWrap}>
            <ul>
              <p className={css.carInfoDetails}>Car Specifications:</p>
              <li>
                <svg className={css.iconCalendar}>
                  <use href="/public/icons/sprite.svg#icon-calendar"></use>
                </svg>
                <span> Year: {carInfo.year} </span>
              </li>
              <li>
                <svg className={css.iconCar}>
                  <use href="/public/icons/sprite.svg#icon-car"></use>
                </svg>
                <span> Type: {carInfo.tupe}</span>
              </li>
              <li>
                <svg className={css.iconPump}>
                  <use href="/public/icons/sprite.svg#icon-pump"></use>
                </svg>
                <span> Fuel Consumption: {carInfo.fuelConsumption}</span>
              </li>
              <li>
                <svg className={css.iconSettings}>
                  <use href="/public/icons/sprite.svg#icon-settings"></use>
                </svg>
                <span> Engine Size: {carInfo.engineSize}</span>
              </li>
            </ul>
          </div>
          <div className={css.contentBlockWrap}>
            <ul>
              <p className={css.carInfoDetails}>
                Accessories and functionalities:
              </p>
              <li>
                <svg className={css.iconCheckCircle}>
                  <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                </svg>
              </li>
              <li>
                <svg className={css.iconCheckCircle}>
                  <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                </svg>
              </li>
              <li>
                <svg className={css.iconCheckCircle}>
                  <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                </svg>
              </li>
              <li>
                <svg className={css.iconCheckCircle}>
                  <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                </svg>
              </li>
              <li>
                <svg className={css.iconCheckCircle}>
                  <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                </svg>
              </li>
              <li>
                <svg className={css.iconCheckCircle}>
                  <use href="/public/icons/sprite.svg#icon-check-circle"></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default CarDetailsPage;
