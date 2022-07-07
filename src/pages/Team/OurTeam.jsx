import React from "react";
import "./ourteam.css"
import TeamMember from "./teamArray"
import prn1 from "../../assets/photos/Ethan.webp"
import prn2 from "../../assets/photos/Eli.jpg"
import prn3 from "../../assets/photos/Myles.jpg"
import prn4 from "../../assets/photos/person 5.jpg"
export default function OurTeam() {
    return (
        <body>
            <h1 className="body-title"> Our Team</h1>
        <div className="Team">
           
            <section className="Person1">
                <div className="Person1-img">
                    <img src={prn1} className="prn1"/> 
                </div>
                <h1 className="Title">Owner/Project Manager</h1>
                <h2 className="Person1-Name">Ethan(Argus)Russell</h2>
                
                <p className="Person1-Description">Ethan grew up in Montana and spent most of his childhood fascinated by tech. 
                He spent a large portion of his childhood expanding his mind and body by doing independent learning projects and extreme sports such as 
                rock climbing, kayaking, and snowboarding. In adulthood he began entrupreneuarship starting and selling his first company at 17
                Ethan spends his time increasing his knowledge as a  
                 software engineer and Market Anyilest. Ethan hopes his skills can bring good to the world and 
                 create new paths for people.</p>
            </section>
            <section className="Person2">
                <div className="Person2-img">
                    <img src={prn2} className="prn2"/>
                </div>
                <h1 className="Title">Graphic Designer</h1>
                <h2 className="Person2-Name">Elijah Pitts</h2>
                <p className="Person2-Description">Anakin Skywalker: Don't lecture me, Obi-Wan! 
                I see through the lies of the Jedi. I do not fear the dark side as you do. 
                I have brought peace, freedom, justice, 
                and security to my new Empire.</p>
            </section>
            <section className="Person3">
                <div className="Person3-img">
                    <img src={prn3} className="prn3"/>
                </div>
                <h1 className="Title">Tech Advisor</h1>
                <h2 className="Person3-Name">Myles Wilson</h2>
                <p className="Person3-Description">Anakin Skywalker: Don't lecture me, Obi-Wan! 
                I see through the lies of the Jedi. I do not fear the dark side as you do. 
                I have brought peace, freedom, justice, 
                and security to my new Empire.</p>
            </section>
            <section className="Person4">
                <div className="Person4-img">
                    <img src={prn4} className="prn4"/>
                </div>
                <h1 className="Title">Business Advisor</h1>
                <h2 className="Person3-Name">"J"</h2>
                <p className="Person3-Description">This person prefers not to be disclosed</p>
            </section>
        </div>
        </body>
        
    )
}

