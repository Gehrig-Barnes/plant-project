import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./nav.css";
import logo from "./logo.png";
import SearchBar from "./SearchBar/SearchBar";

function NavBar({ handleLogOutClick, setSearch, filterSearch, search }) {
  return (
    <div className="nav" id="nav">
      <Navbar className="navBar">
        <div className="brand">
          <Navbar.Brand href="/">
            <img width="" src={logo} alt="plant" className="logo" href="/" />
          </Navbar.Brand>
        </div>

        <Nav style={{ paddingRight: 30 }}>
          <div className="searchBar">
            <SearchBar
              setSearch={setSearch}
              filterSearch={filterSearch}
              search={search}
            />
          </div>
          <div id="dropDown">
            <NavDropdown title="三">
              <NavDropdown.Item className="item" href="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Feed</NavDropdown.Item>
              <NavDropdown.Item>settings</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogOutClick}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
