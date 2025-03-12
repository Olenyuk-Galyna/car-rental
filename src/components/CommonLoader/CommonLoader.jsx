import React from "react";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";

export const CommonLoader = () => {
  const isLoading = useSelector((state) => state.loader.isLoading);
  return isLoading && <Loader />;
};
