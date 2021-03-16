import React from "react";

function Card (props) {
return(
    <div className="card">
        <div className="image-container">
            <img alt= "image here" src={props.picture}/>
        </div>
        <div className="employees">
            <ul>
                <li> Name: {props.firstName} {props.lastName}</li>
                <li> Email: {props.email}</li>
                <li> Phone: {props.phone} </li>
            </ul>
        </div>
    </div>
)
}

export default Card;