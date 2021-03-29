import React, { useState, useEffect } from "react";
import "./ProjectCard.css"


function ProjectCard(props) {
    return (
        <div className="glass">
            <div className="contain">
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img src={props.props.image} />


                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <h3>{props.props.name}</h3>
                            <p>Info about project</p>

                            <a href={props.props.link}>Take a look!</a>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProjectCard;