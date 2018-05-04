import React from "react";
import "../styles/Navbar.css";


const Navbar = () => (
        <div className="navbar">
            <a className="navbar-brand" href="/">Clicky</a>
            <li id="navcenter">Click any image to begin</li>
            <li id="score">Score: 0 | Top Score: 0</li>
        </div>
    

);

export default Navbar;