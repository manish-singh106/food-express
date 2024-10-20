import FoodExpressLogo from "../../Images/FoodExpressLogo.jpeg";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
  const cart = useSelector((store) => store.cart.items);
  console.log("cart-->", cart);

  return (
    <div className="header">
   
      <div className="app-logo">
        <img src={FoodExpressLogo}></img>
      </div>
      <div className="header-nav">
        <ul className="header-nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about-us">AboutUS</Link>
          </li>
          <li>
            <Link to="contact-us">ContactUS</Link>
          </li>
          <li>Login</li>
          <li>
            <Link to="/cart">Cart - {cart.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
