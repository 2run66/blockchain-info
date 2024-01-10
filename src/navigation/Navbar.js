import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.png";
import "./Navbar.css";
//import Giris from "../views/Pages/Giris";
function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Logo" className="navbar-logo" />
            <Link className="navbar-text" activeClass="active" smooth spy to="/giris">Home</Link>
            <Link className="navbar-text" activeClass="active" smooth spy to="/nasilcalisir">How it works</Link>
            <Link className="navbar-text" activeClass="active" smooth spy to="/apps">Apps</Link>
            {/* Add more links as needed */}
        </nav>
    );
}

export default Navbar;
