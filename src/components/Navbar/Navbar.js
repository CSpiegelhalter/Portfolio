import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "./Navbar.css"

const MyNav = (props) => {

  const styles = {
    white: {
      color: "white"
    },
    black: {
      backgroundColor: "#393a3f"
    }
  };

  return (
    <div>
      <Navbar className="mynavbar" light expand="md" style={styles.black} >

        <div className="wrap">
          <NavbarBrand style={styles.white} href="/">Curt Spiegelhalter</NavbarBrand>

          <Nav className="ml-auto" >
            <NavItem>
              <NavLink style={styles.white} href="/components/">My Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.white} href="/components/">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={styles.white} href="/">Contact</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default MyNav;