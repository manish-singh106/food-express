import FoodExpressLogo from "../../Images/FoodExpressLogo.jpeg";
import './header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img src={FoodExpressLogo}></img>
      </div>
      <div className="header-nav">
        <ul className="header-nav-items">
          <li>Home</li>
          <li>AboutUS</li>
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;