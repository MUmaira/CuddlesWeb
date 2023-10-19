import React from 'react'
import { FaHome, FaUser, FaCog, FaEnvelope, FaBell } from "react-icons/fa";
import '../styles/SideBar.css'
import Logo from '../assets/Cuddleslogo.png'
import nurse from '../assets/nurse.jpg'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
    <div className="logo">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="profile">
      <img src={nurse} alt="Profile" /> 
      <br/>
      <p1 className = "para1">Nimali Indika</p1><br/>
      <p2 className = 'para2'>Chief Nursing Officer</p2>
    </div>
    <div className="tabs">
      <div className="tab">
        <FaHome />
        <Link to='/account' style={{textDecoration:'none', color:'black'}}>
        <span>Account</span>
        </Link>
      </div>
      <div className="tab">
        <FaUser />
        <Link to='/schedule' style={{textDecoration:'none', color:'black'}}>
        <span>Weekly Schedule</span>
        </Link>
      </div>
      <div className="tab">
        <FaCog />
        <Link to='/insights'style={{textDecoration:'none', color:'black'}} >
        <span>Insights</span>
        </Link>
      </div>
      <div className="tab">
        <FaEnvelope />
        <Link to='/emergency'style={{textDecoration:'none', color:'black'}} >
        <span>Emergency</span>
        </Link>
      </div>
      <div className="tab">
        <FaBell />
        <Link to='doctors'style={{textDecoration:'none', color:'black'}} >
        <span>Doctors</span>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default SideBar
