import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";


const App =()=>{
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />} />
            </Routes>
        </Router>
    );
};

export default App;