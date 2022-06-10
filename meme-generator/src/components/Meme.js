import React from "react";
import picEmoji from "../assets/framedpic.png"

export default function Meme() {
    return(
        <section className="meme--form">
            <div className="inputs">
                <input type="text" placeholder="Shut up"></input>
                <input type="text" placeholder="and take my money"></input>
            </div>
            <button>Get a new meme image <img src={picEmoji} alt="Get a new meme" /></button>
        </section>
    )
}