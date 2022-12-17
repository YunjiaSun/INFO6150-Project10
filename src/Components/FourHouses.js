import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Houses.css";

function FourHouses({ name, id, image}) {
    const navigate = useNavigate();
    return (
        <div
            className="houseItem"
            onClick={() => {
                navigate("/house/" + id);
            }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h5> {name} </h5>
        </div>
    );
}

export default FourHouses;