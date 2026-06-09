import { LOGO_URL } from "../utils/references";
import { useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <img src={LOGO_URL} alt="Food Truck" className="logo" />
      <h1>We will deliver food to you</h1>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() =>
            loginBtn === "Login" ? setLoginBtn("LogOut") : setLoginBtn("Login")
          }
        >
          {loginBtn}
        </button>
      </ul>
    </div>
  );
};

export default Header;
