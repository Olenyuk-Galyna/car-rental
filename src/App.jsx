import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarDetaliesPage from "./pages/CarDetaliesPage/CarDetaliesPage";

export const App = () => {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:carId" element={<CarDetaliesPage />} />
      </Routes>
      {/* // <AppBar />
      // <TaskForm />
      // <TaskList /> */}
    </div>
  );
};
