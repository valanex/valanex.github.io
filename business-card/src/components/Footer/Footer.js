import React from "react";
import TwitterIcon from "../../assets/twitter-icon.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import GitHubIcon from "../../assets/github-icon.png";
import "../style.css";

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com"><img src={TwitterIcon} alt="Twitter" /></a>
            <a href="https://facebook.com"><img src={FacebookIcon} alt="Facebook" /></a>
            <a href="https://instagram.com"><img src={InstagramIcon} alt="Instagram" /></a>
            <a href="https://github.com"><img src={GitHubIcon} alt="GitHub" /></a>
        </footer>
    )
}