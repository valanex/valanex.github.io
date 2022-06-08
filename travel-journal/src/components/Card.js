import React from "react";
import pinIcon from "../assets/pinicon.png"

export default function Card(props) {
    return (
        <section>
            <div className="card--section">
                <div className="travel--photo">
                    <img src={props.imageUrl} alt={props.title} className="card--photo"/>
                </div>
                <div className="travel--details">
                    <div className="travel--location">
                        <img src={pinIcon} alt="Location" />
                        <h3>{props.title}</h3>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2>{props.location}</h2>
                    <h4>{props.startDate} - {props.endDate}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
        </section>
    )
}