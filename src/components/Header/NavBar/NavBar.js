import React from "react";
import logo from "../../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <table className="nav-container">
      <tr>
        <td>
          <a href="/">
            <img src={logo} alt="Home Icon" />
            <h1>Home</h1>
          </a>
        </td>
        <td>
          <a href="/">
            <img src={logo} alt="Menu Icon" />
            <h1>Menu</h1>
          </a>
        </td>
        <td>
          <a href="/">
            <img src={logo} alt="Services Icon" />
            <h1>Services</h1>
          </a>
        </td>
        <td>
          <a href="/">
            <img src={logo} alt="Staff Icon" />
            <h1>Staff</h1>
          </a>
        </td>
        <td>
          <a href="/">
            <img src={logo} alt="Games Icon" />
            <h1>Games</h1>
          </a>
        </td>
      </tr>
    </table>
  );
};
export default NavBar;
