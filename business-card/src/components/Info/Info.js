import React from "react";
import EmailButton from "../../assets/email-button.png";
import LinkedInButton from "../../assets/linkedin-button.png";
import ProfilePic from "../../assets/asf-pfp.jpg";
import "../style.css";

export default function Info() {
    return (
        <header className="header-bar">
            <img src={ProfilePic} alt="Angela Sun Flores" />
            <h1>Angela Sun Flores</h1>
            <h4>Software Engineer</h4>
            <div className="info-buttons">
                <a href="mailto: angela.m.sun@gmail.com" rel="noopener"><img src={EmailButton} alt="Email me" /></a>
                <a href="https://www.linkedin.com/in/angela-sun-flores/" rel="noopener"><img src={LinkedInButton} alt="Find me on LinkedIn" /></a>
            </div>
        </header>
    )
}