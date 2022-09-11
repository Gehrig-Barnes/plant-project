import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./nav.css";
import logo from "./logo.png";
import SearchBar from "./SearchBar/SearchBar";

function NavBar({ handleLogOutClick, setSearch, filterSearch, search }) {
  return (
    <div className="nav">
      <Navbar style={{ minWidth: 800 }} >
        
        <Navbar.Brand href="/" className="brand">
        <img width="" src={logo} alt="plant" className="logo" href='/'/>
        </Navbar.Brand>

        <Nav style={{ paddingRight: 30 }}>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/">My Feed</Nav.Link>
          <SearchBar
            setSearch={setSearch}
            filterSearch={filterSearch}
            search={search}
          />
          <Button onClick={handleLogOutClick} style={{ marginLeft: 1120 }}>
            Logout
          </Button>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
