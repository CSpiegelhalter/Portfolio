import React, { useState, useEffect } from "react";
import "./ProjectCard.css"


function ProjectCard(props) {
    return (
        <div className="container-fluid">
            <h3 style={{ marginTop: "10vh" }}>{props.props.name}</h3>
        <div className="glass" style={{ backgroundImage: `url(${props.props.image})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
            {/* <img src={props.props.image} /> */}

                
                
        </div>
        <p>Info about project</p>

                <a href={props.props.link}>Take a look!</a>
        </div>
    )
}

export default ProjectCard;