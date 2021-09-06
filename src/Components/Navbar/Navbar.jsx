import React from "react";
import Logo from "../../assets/images/logo-bg.png";
import Account from "../Account/Account";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className={"nav"}>
      <ul>
        <li>
          <a href="index.html" className={"brand"}>
            <img src={Logo} alt="/" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Navbar;
