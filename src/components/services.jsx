import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/carousel/img1.jpg";
import img2 from "../assets/carousel/img2.jpg";
import img3 from "../assets/carousel/img3.jpg";
import "../styles/sevices.css"
const Services = ()=>{
    return(
        <div >
            <Carousel showArrows={false} infiniteLoop={true}  showIndicators={false} 
            showStatus={false} autoPlay interval={1000} stopOnHover={false} showThumbs={false} useKeyboardArrows={true} className="services">
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
        // <h1 >services</h1>
    );
}
export default Services;