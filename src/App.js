import Wand from "./Components/Wand";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";



function App() {
    return (
        <>
            <div className="App">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element = {<Home />} />
                        <Route path="/wands" element={<Wand />} />
                    </Routes>
                </Router>
            </div>
        </>

    );
}

export default App;
