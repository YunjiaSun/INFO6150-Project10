import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Home </Link>
                <span> 🏰 </span>

                <Link to="/houses"> Houses </Link>
                <span> 🏰 </span>

                <Link to="/wands"> Wands </Link>
                <span> 🪄 </span>
            </div>
        </div>
    );
};
export default Navbar;