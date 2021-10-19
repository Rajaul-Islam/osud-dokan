import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';






const Header = () => {
    const {allContext}=useAuth()
    const { user, logOut } = allContext;
    return (
        <div className='header'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to='/home' className='text-white'>Osud Dokan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-white' as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-white' as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link className='text-white' as={NavLink} to="/freeservice">Free Service</Nav.Link>

                            {
                                user?.displayName ? <Nav.Link className='text-white' onClick={logOut}> hello! {user?.displayName} {" "}Logout</Nav.Link> :
                                    <>
                                        <Nav.Link className='text-white' as={NavLink} to="/signup">Sign Up </Nav.Link >
                                        <Nav.Link className='text-white' as={NavLink} to="/login">Login</Nav.Link>
                                    </>


                            }
                            <Nav.Link as={NavLink} to='/cart'><FontAwesomeIcon icon={faShoppingCart} />
                                <Badge className='text-white' bg="secondary">0</Badge></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;