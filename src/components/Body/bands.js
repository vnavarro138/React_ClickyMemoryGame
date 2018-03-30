import React from "react";
import "./bands.css";

const BandCard = props => (
        <button onClick={() => props.handleOnchange(props.id, props.phrase)}>
                <div className="cards">
                        <div className="img-container">
                                <img id={props.id} alt={props.name} src={props.image} />
                        </div>
                </div>
        </button>
);

export default BandCard;
