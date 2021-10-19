import React from 'react';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
const SignUp = () => {
    const {allContext}=useAuth()
    const { signUp, error, getEmail,
        getPassword, getName } = allContext;

    return (
        <div className='container text-center'>
            <h2>Please Sign UP</h2>
            <p>SignUp with Email & Password</p>
            <p>{error}</p>
            <Form onSubmit={signUp}>
                <Row>
                    <Col className="text-start">
                        <Form.Label htmlFor="name" visuallyHidden>
                            Your Name
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </InputGroup.Text>
                            <FormControl
                                required
                                onBlur={getName}
                                type="text"
                                autoComplete="current-name"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-start">
                        <Form.Label htmlFor="email" visuallyHidden>
                            Your Email Address
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            </InputGroup.Text>
                            <FormControl
                                onBlur={getEmail}
                                type="email"
                                autoComplete="current-email"
                                id="email"
                                placeholder="Enter your email address"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-start">
                        <Form.Label htmlFor="password" visuallyHidden>
                            Your Password
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                            </InputGroup.Text>
                            <FormControl
                                onBlur={getPassword}

                                type="password"
                                autoComplete="current-password"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <button type="submit" className="btn btn-primary mt-2 px-5">
                    Sign up
                </button>
            </Form>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/login">
                    Already have an account? Please Log In!
                </NavLink>
                <br />
            </p>

        </div>
    );
};

export default SignUp;