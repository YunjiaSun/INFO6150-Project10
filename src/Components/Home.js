import React from "react";
import img from "./img/background.jpg"

const Home =() =>{

    return(
        <div className="home-contents">
            <h1 className="title">Welcome to the World of Magic 🔮</h1>
            <h3 className="slogan">
                "The stories we love best
                do live in us forever,
                so whether you come back by
                page or by the big screen,
                Hogwarts will always be there
                to welcome you home." </h3>
            <img className="photo" src={img}/>
        </div>
    )
}

export default Home;