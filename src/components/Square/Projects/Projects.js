import React from "react";
import "./Projects.css";
import { Container, Row, Col } from 'reactstrap';
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import notes from "../../../images/notes.png"
import donde from "../../../images/donde.png"
import budget from "../../../images/budget.png"
import fitness from "../../../images/fitness.png"


export default function Projects() {

    const projects1 = [
        {
            name: "Donde",
            image: donde,
            link: "https://shielded-woodland-30004.herokuapp.com/"
        }
        ,
        {
            name: "Budget.io",
            image: budget,
            link: "https://fast-brushlands-99096.herokuapp.com/"
        }
    ]

    const projects2 = [
        {
            name: "Fitness Tracker",
            image: fitness,
            link: "https://ancient-journey-14742.herokuapp.com"
        },
        {
            name: "Note Taker",
            image: notes,
            link: "https://young-badlands-54377.herokuapp.com/"
        }
    ]

    return (

            <div className="titles">
                <h1 >My Projects</h1>
            <div className="myParent">
            <div className="sep">
                {projects1.map((e) => {
                    return (
                        <div className="getAway">
                            <ProjectCard props={{ name: e.name, image: e.image, link: e.link }} />
                        </div>
                    )
                })}
            </div>
            <div className="sep">
                {projects2.map((e) => {
                    return (
                        <div >
                            <ProjectCard props={{ name: e.name, image: e.image, link: e.link }} />
                        </div>
                    )
                })}
            </div>


            </div>
        </div>
    )
}