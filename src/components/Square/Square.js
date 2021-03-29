import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"
import "./Square.css"

export default function Square() {

    

    return (
        <div>
            <Row className="sq">
                <Row>
                <Projects />
                </Row>

                <Skills />

                
                
                
            </Row>

            
        </div>
    )
}