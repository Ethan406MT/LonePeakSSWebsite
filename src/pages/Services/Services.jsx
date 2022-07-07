import React from "react";
import "./services.css"
import { Contact } from "../Home/index"
import marketingimg from "../../assets/photos/ClientSTock2.jpg"

export default function Services() {
    return (
        <div className="Services">
            
            <div className="serviceheader">
                Listed Services
            </div>;
                <div  className="information_box">
                    <ul className="listed">
                        

                            <div className="box1">
                            
                            
                                <h1 className="HeaderStyles">Marketing</h1>
                                <li> Advertisement Management </li>
                                <li> Start up Marketing Consulting </li>
                                <li> Online and Local Marketing/Advertising Consulting  </li>
                                <li> Market Research Geared to your Industry </li>
                                <li> Freelancing Portfolio Management</li>
                                <li> Contact us for More... </li>
                                
                            </div>
                            <div className="box2">
                            
                                <h2 className="HeaderStyles">Software</h2>
                                <li> Custom Software Geared to Your Company/Personal Needs </li>
                                <li> Use our Prebuilt Basic Software for a More accessable Experience</li>
                                <li> Tech Consulting </li>
                                <li> Mobile Apps</li>
                                <li> Contact us for More... </li>
                            </div>
                            <div className="box3" >
                            
                                <h3 className="HeaderStyles">Website Management</h3>
                                <li> Active Website Maintaince </li>
                                <li> Domain and Hosting Management</li>
                                <li> Single Purchase Websites </li>
                                <li> Portfolio Assistance </li>
                                <li> Email Hosting </li>
                                <li> Contact us for More... </li>
                            </div>
                            <div className="box4">
                            
                                <h4 className="HeaderStyles"> Graphic Design </h4>
                                <li> Logos </li>
                                <li> Ads </li>
                                <li> Pitch Decks </li>
                                <li> Business Cards</li>
                                <li> Personal Graphics </li>
                                <li> Merchandise </li>
                                <li> Contact us for More... </li>

                                  
                                
                                
                            </div>
                            
                        </ul>

                       
                
                </div>
                <div className="Info"> <h5>For more information contact us below</h5></div>
            <Contact />
        </div>
        
    );
}