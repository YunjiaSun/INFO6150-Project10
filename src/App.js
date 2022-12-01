import Wand from "./Components/Wand";
import Home from "./Components/Home";
import './App.css';
import {useState} from "react";


function App() {

    const [page, setPage] = useState("Home")

    const pageHelper = (event,page) => {
        setPage(page);
        // console.log("hello")
    }

    return (
        <>
            <div className="navbar">
                <button onClick={(e) => pageHelper(e,"Home")}>Home</button>
                <button onClick={(e) => pageHelper(e,"Wand")}>Wand</button>
            </div>

            <div className="App">
                {(page === "Home") && <Home />}
                {(page === "Wand") && <Wand />}
            </div>

        </>

    );
}

export default App;
