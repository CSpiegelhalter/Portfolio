import React from "react";
import MyNav from "../Navbar/Navbar";
import Button from "../Button/Button";
import "./LandingPage.css"

export default function LandingPage() {
    return (
        <div className="App">
            <MyNav />
            <div className="wrapper">

                <div className="container">
                    <p className="eyeCatch">LOOKING FOR A WEB DEVELOPER?</p>
                    <br></br>
                    <p style={{ fontSize: 20, backgroundColor: "#f1f2f3" }}>I am a Jr. Full-stack Web Developer living in Pensacola, Florida. If you are a business looking for a website for a or an employer looking to hire contact me here:</p>
                    <div style={{ justifyContent: "center" }}>
                        <Button  />
                    </div>

                </div>

            </div>
        </div>
    )
}