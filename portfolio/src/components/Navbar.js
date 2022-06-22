import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <h1>[ Angela Sun ]</h1>
            <a href="#">About me</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
            <p>Dark Mode</p>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
        </nav>
    )
}