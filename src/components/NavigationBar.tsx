import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './NavigationBar.scss';
import {useLocation} from "react-router-dom";

export const NavigationBar = () => {
    const loc = useLocation();
    return (
        <Container fluid>
            <Navbar expand="lg" >
                <Container>
                    <Nav activeKey={loc.pathname}>
                        <Navbar.Text> BusBoard </Navbar.Text>
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link href="lookup"> Lookup </Nav.Link>
                        <Nav.Link href="history"> History </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
}