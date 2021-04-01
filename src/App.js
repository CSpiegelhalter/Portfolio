import React, { Component, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Square from "./components/Square/Square"
import ContactMe from "./components/ContactMe/ContactMe"
import ConfirmModal from "./components/Modal/Modal"
import MyNav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import "./App.css";

import { Container, Row, Col } from 'reactstrap';


function App() {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);



  return (
    <div>
      <MyNav />
      <div className="container">
        <LandingPage />

        <ConfirmModal modal={modal} toggle={toggle} />
         <Square />

        <ContactMe toggle={toggle} /> */}

        
      </div>
      <Footer />
    </div>

  );
}


export default App;
