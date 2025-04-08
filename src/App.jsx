import { Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarDetailsPage from "./pages/CarDetailsPage/CarDetailsPage";
import Header from "./components/Header/Header";
import { CommonLoader } from "./components/CommonLoader/CommonLoader";
import { ToastContainer, toast } from "react-toastify";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:carId" element={<CarDetailsPage />} />
        </Route>
      </Routes>
      <ToastContainer />
      <CommonLoader />
    </div>
  );
};
