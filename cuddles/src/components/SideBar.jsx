import React from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaEnvelope,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/SideBar.css";
import Logo from "../assets/Cuddleslogo.png";
import nurse from "../assets/nurse.jpg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="profile">
        <img src={nurse} alt="Profile" />
        <br />
        <p1 className="para1">Nimali Indika</p1>
        <br />
        <p2 className="para2">Chief Nursing Officer</p2>
      </div>
      <div className="tabs">
        <Link to="/account" className="tab">
          <FaHome />
          <span>Account</span>
        </Link>
        <Link to="/schedule" className="tab">
          <FaUser />
          <span>Weekly Schedule</span>
        </Link>
        <Link to="/insights" className="tab">
          <FaCog />
          <span>Insights</span>
        </Link>
        <Link to="/emergency" className="tab">
          <FaEnvelope />
          <span>Emergency</span>
        </Link>
        <Link to="/doctors" className="tab">
          <FaBell />
          <span>Doctors</span>
        </Link>
      </div>
      <div className="logout">
        <Link to="/" className="logut">
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
