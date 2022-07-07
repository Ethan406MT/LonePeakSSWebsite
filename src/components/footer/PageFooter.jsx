import React from "react"
import "./footer.css"
import greylogo from "../../assets/photos/Greyedoutlogo.png"

export const PageFooter = ()=> {
    return (
<>
        <div className="lpfooter">
            <div className="logo2box">
            <img src={greylogo} alt="logo2" className="logo2"/></div> 
            <p>
            
            Lone Peak Software Solutions TM
            
            

        </p>
        </div>

        </>

    )
}

