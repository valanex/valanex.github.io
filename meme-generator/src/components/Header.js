import React from "react";
import trollLogo from "../assets/trollface.png";

export default function Header() {
    return (
        <header>
                <img src={trollLogo} alt="Troll face icon" />
                <h1>Meme Generator</h1>
                <h2>React Course - Project 3</h2>
        </header>
    )
}