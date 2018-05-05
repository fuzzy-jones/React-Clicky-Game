import React, { Component } from "react";
import "../styles/Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar sticky-top">
                <a className="navbar-brand" href="/">Clicky</a>
                <li className="navcenter">Click any image to begin</li>
                <li className="score">Score: 0 | Top Score: 0</li>
            </div>
        )
    }
}

export default Navbar;