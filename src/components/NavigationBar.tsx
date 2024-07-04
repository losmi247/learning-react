import React, {useState} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import './NavigationBar.scss';
import {Link} from 'react-router-dom';



export const NavigationBar = () => {

    const [currentPage, setCurrentPage] = useState<string>("home");

    function clickHandler(event: React.MouseEvent<HTMLElement>) {
        setCurrentPage(event.currentTarget.id);
    }


    return (
        <>
            <Navbar expand = "sm" className="navbar-dark">
                <Container fluid className="no-margin">
                    <Navbar.Text> BusBoard </Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav>

                            {currentPage === "home" ? <Nav.Link as={Link} to="/" id="home" className="nav-active"
                                                                onClick={clickHandler}> Home </Nav.Link> :
                                <Nav.Link as={Link} to="/" id="home" onClick={clickHandler}> Home </Nav.Link>}
                            {currentPage === "lookup" ? <Nav.Link as={Link} to="/lookup" id="lookup" className="nav-active"
                                                                  onClick={clickHandler}> Lookup </Nav.Link> :
                                <Nav.Link as={Link} to="/lookup" id="lookup" onClick={clickHandler}> Lookup </Nav.Link>}
                            {currentPage === "history" ?
                                <Nav.Link as={Link} to="/history" id="history" className="nav-active"
                                          onClick={clickHandler}> History </Nav.Link> :
                                <Nav.Link as={Link} to="/history" id="history" onClick={clickHandler}> History </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}