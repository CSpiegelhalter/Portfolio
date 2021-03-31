import React, { Component, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Square from "./components/Square/Square"
import ContactMe from "./components/ContactMe/ContactMe"
import ConfirmModal from "./components/Modal/Modal"
import Footer from "./components/Footer/Footer"
import "./App.css";

import { Container, Row, Col } from 'reactstrap';


function App() {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  

  return (
    <div>
        <LandingPage />

      <ConfirmModal modal={modal} toggle={toggle} />

      <div className="hold">
        <Square />
      </div>
        
        <Row className="contact">

          <div className="box">
            <ContactMe toggle={toggle} />
            </div>
   
        
        </Row>
        <Footer />
        </div>
     
  );
}


export default App;
