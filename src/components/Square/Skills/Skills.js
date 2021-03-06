import React, { useEffect } from "react";
import "./Skills.css";
import { Container, Row, Col } from 'reactstrap';
import Parallax from 'parallax-js';
import CSSicon from "../../../images/TechIcons/CSS.png"
import bootstrapIcon from "../../../images/TechIcons/Bootstrap.png"
import htmlIcon from "../../../images/TechIcons/htmlIcon.png"
import JsIcon from "../../../images/TechIcons/JsIcon.png"
import mongo from "../../../images/TechIcons/mongo.png"
import mySqlIcon from "../../../images/TechIcons/mySqlIcon.png"
import node from "../../../images/TechIcons/node.png"
import python from "../../../images/TechIcons/python.png"
import reactIcon from "../../../images/TechIcons/reactIcon.png"


export default function Skills() {



    useEffect(() => {
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);


    }, [])

    const techArray = [CSSicon, bootstrapIcon, htmlIcon, JsIcon, mongo, mySqlIcon, node, python, reactIcon]


    return (
        <div id="skills" className="allSkills">
            <div className="titles">
                <div className="col " >
                    <div className="row" style={{ justifyContent: "center" }}><h1 >What I'm good at</h1></div>
                    <div className="row">
                        <div className="parallax" >
                            <div id="scene" className="scene">
                                <div className="learn" data-depth="1.6">
                                    <img className="techs react" src={reactIcon} />
                                </div>
                                <div data-depth="1.60">
                                    <img className="techs css" src={CSSicon} />
                                </div>
                                <div data-depth="1.80">
                                    <img className="techs bootstrap" src={bootstrapIcon} />
                                </div>
                                <div className="html" data-depth="1.40">
                                    <img className="techs html" src={htmlIcon} />
                                </div>
                                <div className="js" data-depth="1.00">
                                    <img className="techs js" src={JsIcon} />
                                </div>
                                <div className="mongo" data-depth="1.2">
                                    <img className="techs mongo" src={mongo} />
                                </div>
                                <div className="node" data-depth="2">
                                    <img className="techs node" src={node} />
                                </div>
                                <div className="sql" data-depth="0.80">
                                    <img className="techs sql" src={mySqlIcon} />
                                </div>
                                <div className="python" data-depth="1.00">
                                    <img className="techs python" src={python} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}