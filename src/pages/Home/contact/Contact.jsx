import React from "react";
import "./contact.css";
//import contactusimg from "../../../assets/imgs"
import contactusimg from "../../../assets/photos/download.jpg"

const Contact = () => {
    return (
        <>
        <div className="ContactSection">
        <img src={contactusimg} alt="contactus" className="contactusimg"/>
            <div className="ContactBox">
                
                <p>Contact Us / Get a Consult</p>
                    <div className="Box1">
                        <p>Name / Email / Phone Number</p>
                    </div>
                    <div className="Box2">
                        <p>fill out your request or feel free to put "request consult" and our rep will be with you at the soonest available time</p>
                    </div>
            </div>
        </div>
        
        </>

    
        )
}

export default Contact

