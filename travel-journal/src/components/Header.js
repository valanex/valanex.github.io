import React from "react";
import worldIcon from "../assets/worldicon.png"

export default function Header() {
    return (
        <header>
            <img src={worldIcon} alt="world icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}