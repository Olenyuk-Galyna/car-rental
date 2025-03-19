import React, { useState } from "react";
import css from "./CarsList.module.css";
import { useNavigate } from "react-router-dom";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";

const carData = {
  id: "11a3ab35-07b8-4336-b06b-602cdc309f2c",
  year: 2008,
  brand: "Buick",
  model: "Enclave",
  type: "SUV",
  img: "https://ac.goit.global/car-rental-task/9582-ai.jpg",
  description:
    "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
  fuelConsumption: "10.5",
  engineSize: "3.6L V6",
  accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
  functionalities: ["Power liftgate", "Remote start", "Blind-spot monitoring"],
  rentalPrice: "40",
  rentalCompany: "Luxury Car Rentals",
  address: "123 Example Street, Kiev, Ukraine",
  rentalConditions: [
    "Minimum age: 25",
    "Valid driver's license",
    "Security deposit required",
  ],
  mileage: 5858,
};

const CarsList = ({ list = [carData] }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorite")) || []
  );

  const handleFavorite = (id) => {
    console.log("handleFavorite");
    const favoriteListJson = localStorage.getItem("favorite");
    const favoriteList = JSON.parse(favoriteListJson) || [];
    const isIdExist = favoriteList.includes(id);
    let result = [];
    if (isIdExist) {
      result = favoriteList.filter((favoriteId) => {
        return favoriteId !== id;
      });
    } else {
      favoriteList.push(id);
      result = favoriteList;
    }
    localStorage.setItem("favorite", JSON.stringify(result));
    setFavorite(JSON.stringify(result));
  };

  const getIsFavorite = (id) => {
    return favorite.includes(id);
  };

  return (
    <ul className={css.carsList}>
      {list.map((carItem) => {
        return (
          <li className={css.carItem} key={carItem.id}>
            <img src={carItem.img} alt={carItem.brand} />
            <FavoriteBtn
              isFavorite={getIsFavorite(carItem.id)}
              onClick={() => handleFavorite(carItem.id)}
            />
            <div className={css.carsDescr}>
              <p className={css.carName}>
                {carItem.brand}
                <span className={css.carModel}>{carItem.model}</span>,{" "}
                {carItem.year}
              </p>
              <p className={css.price}>${carItem.rentalPrice}</p>
            </div>
            <button
              className={css.readMore}
              type="button"
              onClick={() => {
                navigate(`/catalog/${carItem.id}`);
              }}
            >
              Read More
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CarsList;
