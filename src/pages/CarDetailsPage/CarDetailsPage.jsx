import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./CarDetailsPage.module.css";
import { Formik, Form, Field } from "formik";

const carInfo = [
  "Aston Martin",
  "Audi",
  "BMW",
  "Bentley",
  "Buick",
  "Chevrolet",
  "Chrysler",
  "GMC",
  "HUMMER",
  "Hyundai",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lincoln",
  "MINI",
  "Mercedes-Benz",
  "Mitsubishi",
  "Nissan",
  "Pontiac",
  "Subaru",
  "Volvo",
];

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
    actions.carInfo();
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
        Brand:
        {carInfo.brand}
        <img src={""} alt={""} />
        <div className={css.infoForm}>
          <h2 className={css.carTitle}>Book your car now</h2>
          <p className={css.subTitle}>
            Stay connected! We are always ready to help you.
          </p>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={css.formInputs}>
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
      </div>
    )
  );
};

export default CarDetailsPage;
