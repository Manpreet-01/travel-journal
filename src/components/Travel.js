import React from "react"

export default function Travel(props) {
    return (
        // my new code
        <div className="travel--g">
            <img src={`../images/${props.img}`} className="travel--image" alt="" />
            <div className="main" >
                <img src="./images/location-image.png" className="travel--location" id="location-logo" alt="" />
                <span className="travel--locate" id="item-location">{props.location}</span>
                <span className="bold" id="place-name">{props.title}</span>
                <span className="travel--bold" id="travel-date">{props.startDate} - </span>
                <span className="travel--bold" id="travel-date">{props.endDate}</span>
                <div>
                    <p className="travel--description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}