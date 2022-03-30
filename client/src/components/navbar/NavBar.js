import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./nav.css";
import logo from "./logo.png"

function NavBar({ handleLogOutClick }) {
  return (
    <div className="nav">
      <Navbar style={{ minWidth: 800}}>
        <img
          width=""
          src={logo}
          alt="plant"
          className="logo"
        />
        <Navbar.Brand href="/" className="brand">
          PotHeads
        </Navbar.Brand>
        <Nav style={{ paddingRight: 30 }} >
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/">My Feed</Nav.Link>
          <Button onClick={handleLogOutClick} style={{marginLeft: 1120}}>
            Logout
          </Button>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
