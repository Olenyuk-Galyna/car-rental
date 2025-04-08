import { useNavigate } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className={css.logo}>
      <img src="/imeges/logo-RentalCar.svg" alt="Logo" />
    </div>
  );
};

export default Logo;
