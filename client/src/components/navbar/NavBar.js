import React from "react"
import { Navbar, Nav } from 'react-bootstrap';

function NavBar({handleLogOutClick}){
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="/" className="brand">PotHeads</Navbar.Brand>
            </Navbar>
            <Nav>
                <Nav.Link href="/profile">Profile</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Nav.Link href="/">My Feed</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
            </Nav>
            
        </div>
    )
}

export default NavBar