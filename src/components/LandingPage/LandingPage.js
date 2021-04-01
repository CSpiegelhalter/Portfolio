import React from "react";

import Button from "../Button/Button";
import "./LandingPage.css"

export default function LandingPage() {
    return (
        <div className="App">

                <div className="wrapper">
                    <p className="eyeCatch">LOOKING FOR A WEB DEVELOPER?</p>
                    <br></br>
                    <p style={{ fontSize: 20 }}>I am a Jr. Full-stack Web Developer living in Pensacola, Florida. If you are a business looking for a website for a or an employer looking to hire contact me here:</p>

                        

            </div>
            <a href="#contact"><Button  /></a>
            
        </div>
    )
}