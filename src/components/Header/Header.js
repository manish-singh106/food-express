import FoodExpressLogo from "../../Images/FoodExpressLogo.jpeg";
import { Link} from 'react-router-dom';
import Shimmer from "../Shimmer/Shimmer";
import './header.css'
const Header = () => {
  return (
    <div className="header">
      <Shimmer />

      <div className="app-logo">
        <img src={FoodExpressLogo}></img>
      </div>
      <div className="header-nav">
        <ul className="header-nav-items">
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = 'about-us'>AboutUS</Link></li>
          <li><Link to = 'contact-us'>ContactUS</Link></li>
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;