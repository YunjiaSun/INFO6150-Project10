import React from "react";
import { useParams } from "react-router-dom";
import { HouseList } from "./HouseList";
import "./CSS/ShowHouses.css";

function ShowHouses() {
    const { id } = useParams();
    const house = HouseList[id];
    return (
        <div className="house">

            <h1> {house.name}</h1>
            <h3>Traits: {house.traits}</h3>
            <div className="houseInfo">
                <p>Overview: {house.overview}</p>
            </div>
            <img src={house.image} />
        </div>
    );
}
export default ShowHouses;