import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import "./nav.css"

function NavBar({handleLogOutClick}){
    return (
        <div className="nav">
            <Navbar  style={{ minWidth: 700 }}>
            <img id="umbrella" src="https://i.pinimg.com/474x/da/a9/f9/daa9f9c1919424cbf09316e5c6d7e403.png" alt="plant"/>
                <Navbar.Brand href="/" className="brand">PotHeads</Navbar.Brand>
                <Nav style={{ paddingRight: 30 }}>
            
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/">My Feed</Nav.Link>
                    <Nav onClick={handleLogOutClick} className="log_out">Logout</Nav>
                 </Nav>
            </Navbar>
            
        </div>
    )
}

export default NavBar