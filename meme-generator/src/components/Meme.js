import {React, useEffect, useState} from "react";
import picEmoji from "../assets/framedpic.png"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => { //fetches meme images from the API and saves the array of memes into state
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleClick() { // generates a random number and pulls a url from our array of memes
        const randomNum = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }
        ))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme =>  ({
            ...prevMeme,
            [name]: value
        }))
        }
    

    return(
        <section className="meme--form">
            <div className="inputs">
                <input 
                    type="text" 
                    placeholder="Shut up" 
                    name="topText" 
                    value={meme.topText} 
                    onChange={handleChange} 
                />
                <input type="text" placeholder="and take my money" onChange={handleChange} name="bottomText" value={meme.bottomText} />
            </div>
            <button onClick={handleClick}>Get a new meme image <img src={picEmoji} alt="Get a new meme" /></button>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} />
                <p className="meme--text top">{meme.topText}</p>
                <p className="meme--text bottom">{meme.bottomText}</p>
            </div>
        </section>
    )
}