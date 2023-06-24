import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Services from "./components/services";


const App =()=>{
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/contact" element={ <Contact />} />
                <Route path="/services" element={ <Services />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
