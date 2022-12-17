import React from "react";
import {HouseList} from "./HouseList";
import FourHouses from "./FourHouses";
import "./CSS/Houses.css"


function Houses() {
    return (
        <div className="houses">
            <div className="houseList">
                {HouseList.map((house, index) => {
                    return (
                        <FourHouses id={index} image={house.image}/>
                    );
                })}
            </div>
        </div>
    );
}

export default Houses;
