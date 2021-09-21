import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-bg.png";
import Account from "../Account/Account";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className={"nav"}>
      <ul>
        <li>
          <Link to="/" className={"brand"}>
            <img src={Logo} alt="/" />
            <h3>Quizz App</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Navbar;
