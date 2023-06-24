import React from "react";
import "../styles/contact.css"
const Contact = () =>{
return (
    <div className="contact">
        <h1>Contact US</h1>
        <form action="" className="form">
            <div>
            <label htmlFor="">NAME</label>
            <input type="text" />
            </div>
            <div>
            <label htmlFor="">EMAIL</label>
            <input type="email" />
            </div>
            <div>
            <label htmlFor="">MESSAGE</label>
            <input type="text" />
            </div>
            <div>
                <input className="submit" type="submit" />
            </div>
        </form>
    </div>
    // <h1 className="contact">contact</h1>
)
}

export default Contact;