import React, { Component } from "react";
import "../styles/Jumbotron.css";

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Twin Peaks Clicky Game</h1>
                <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        )
    }
}

export default Jumbotron;