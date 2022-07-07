import React from "react";
import "./navbar.css";
import logo from "./assets/photos/LPSSlogo.png"
import { Link, useResolvedPath, useMatch } from "react-router-dom"

export default function Navbar()  {
    return (
        
        <nav className="NavContainer">
            <div className="logo_container">
            <img src={logo} alt={"logo"} className="logo" />
            </div>
            

                <div className="nav_links">
                    <ul>
                        <li className="navil">
                        <CustomLink to="/">Home</CustomLink>
                        </li>
                        <li className="navil">
                        <CustomLink to="/Services">Services</CustomLink>
                        </li >
                        <li className="navil">
                        <CustomLink to="/OurTeam">Our Team</CustomLink>
                        </li>
                        <li className="navil">
                        <CustomLink to="/Partners">Partners</CustomLink>
                        </li>
                    </ul>
                </div>
            
            </nav>
        );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
                        <li className= {isActive ? "active" : " "}>
                        <Link to= {to} {...props}> 
                        {children}</Link>
                        </li>
    );
}