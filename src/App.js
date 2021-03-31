import React, { Component } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Square from "./components/Square/Square"
import ContactMe from "./components/ContactMe/ContactMe"
import "./App.css";

import { Container, Row, Col } from 'reactstrap';


function App() {

  

  return (
    <div>
        <LandingPage />


      <div className="hold">
        <Square />
      </div>
        
        <Row className="contact">

          <div className="box">
            <ContactMe />
            </div>
   
        
        </Row>
        </div>
     
  );
}


export default App;
