import React from "react";
import Logo from "./logo192.png";
import "../style.css";

export default function Navbar() {
    return (
            <nav className="navBar">
                <div className="navLogo">
                    <img src={Logo} alt="React logo" className="logo" />
                    <h3>ReactFacts</h3>
                </div>
                <div className="navTitle">
                    <h4>React Course - Project 1</h4>
                </div>
            </nav>
    )
}

