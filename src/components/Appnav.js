import React from 'react';
import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Appnav(props) {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">{props.title}&nbsp;{props.tail}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/hosting">Ideal Hosting</Nav.Link>
                            <Nav.Link as={Link} to="/freesoftwares">Free Softwares</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>
    )
}

Appnav.defaultProps = {
    title: "Smart",
    tail: "Tech Gigs",
    imageAlt: "boost",
    headline: "Tools Those Inspire"
}
