import Wand from "./Components/Wand";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Houses from "./Components/Houses";
import ShowHouses from "./Components/ShowHouses";



function App() {
    return (
        <>
            <div className="App">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element = {<Home />} />
                        <Route path="/houses" element={<Houses />} />
                        <Route path="/house/:id" element={<ShowHouses />} />
                        <Route path="/wands" element={<Wand />} />
                    </Routes>
                </Router>
            </div>
        </>

    );
}

export default App;
