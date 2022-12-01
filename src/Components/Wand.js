import React, {useEffect, useState} from "react";
import "./Wand.css"


const Wand =() => {
    const [name,setName] = useState("");
    const [wandID,setID] = useState(13);
    const [image,setImage] = useState("");
    const [wood,setWood] = useState("")
    const [core,setCore] = useState("")
    const [master,setMaster] = useState("")

    const getWand = async () => {
        const response = await fetch(`https://legacy--api.herokuapp.com/api/v1/wands/${wandID}`);
        const res = await  response.json();

        setName(res.name)
        setID(res.id);
        setImage(res.image_url)
        setWood(res.wood)
        setCore(res.core)
        setMaster(res.master.name)

    }

    const formHelper = (event) => {
        console.log(event.target.value);
        setID(event.target.value);
    }

    useEffect(() => {

        getWand();
    }, [wandID])


    return <>

        <div className="container">

                <div className="title">
                    <h1>Choose a Wand From Pocket</h1>
                </div>
                <div className="wandinfo">
                    <img className="photo" src={image}/>
                    <div className="detail">
                        <h4>📚 ID: {wandID}</h4>
                        <h4>🔆 Name: {name}</h4>
                        <h4>🪵 Wood: {wood}</h4>
                        <h4>🌟 Core: {core}</h4>
                        <h4>🧙‍♀ ️Master: {master}</h4>
                    </div>
                </div>

            <div className="search">
                <form className="form">
                    {/*<button onClick={() => setID(wandID-1)} className="last">Last One</button>*/}
                    <input type="number" className="searchInput" onChange={(event) => formHelper(event)}/>
                    {/*<button onClick={() => setID(wandID+1)} className="next">Next One</button><br/>*/}
                </form>
            </div>

        </div>

    </>
}

export default Wand;