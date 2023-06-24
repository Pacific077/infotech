import React from "react";
import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin,faTwitter} from "@fortawesome/free-brands-svg-icons"

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="right">
                <h3>INFOTECH</h3>
                <p>@ all rights reserved</p>
            </div>
            <div className="left">
                <h3>Follow Us</h3>
                <div>
                <FontAwesomeIcon className="disp" icon={faLinkedin} />
                <p>linkedind</p>
                </div>
                <div>

                <FontAwesomeIcon className="disp" icon={faTwitter} />
                <p>twitter</p>
                </div>
                <div>
                <FontAwesomeIcon className="disp" icon={faFacebook} />
                <p>facebook</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;