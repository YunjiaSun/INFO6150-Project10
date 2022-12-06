import React, {useEffect,useState} from "react";
import "./Wand.css"


const Wand =() => {
    const [name,setName] = useState("");
    let [wandID,setID] = useState("2");
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

    const handleSubmit = (event) => {
        console.log(event.target.value);
        setID(event.target.value);
        event.preventDefault();
    }

    const restHelper = (event) => {
        setID("2");
        event.preventDefault();
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
                    <img className="photo" src={image} alt="Wand Photo"/>
                    <div className="detail">
                        <h4>📚 ID: {wandID}</h4>
                        <h4>🔆 Name: {name}</h4>
                        <h4>🪵 Wood: {!wood ? "Unknown" : wood}</h4>
                        <h4>🌟 Core: {!core ? "Unknown" : core}</h4>
                        <h4>🧙‍♀ ️Master: {master}</h4>
                    </div>
                </div>

                <div className="search">
                    <form className="form" onSubmit={(event) => handleSubmit(event)}>
                        <input type="number" className="searchInput"
                               placeholder="Please input a number from 1- 87"
                               onSubmit={(event)=> handleSubmit()} />
                    </form>
                </div>

                <div className="threeButtons">
                    <button onClick={() => wandID > 1 ? setID(wandID - 1) : wandID = 1}> Previous One </button>
                    <button onClick={restHelper}> Reset </button>
                    <button onClick={() => wandID < 87 ? setID(wandID + 1) : wandID = 87}> Next One</button>
                </div>
        </div>
    </>
}

export default Wand;