import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Banner() {

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/saved">Saved</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}