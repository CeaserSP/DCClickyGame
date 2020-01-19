import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" onClick={() => props.handlePicked(props.id, props.value)}>
        <div className="img-container">
            <img alt={props.id} src={props.image} />
        </div>
    </div>
);

export default Card;