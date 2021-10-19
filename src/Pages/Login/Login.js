import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import useFirebase from '../../Hook/useFirebase';

const Login = () => {
    const {allContext}=useAuth();
    const history=useHistory()
    const location=useLocation();
    const redirect=location?.state?.from;


    const {signInWithFacebook,signInWithGoogle, error, signInWithEmail, getEmail,
        getPassword } = allContext;
    return (
        <div>
            <h2>Please Login</h2>
            <p>Login with Email & Password</p>
            <p>{error}</p>
            <Form onSubmit={signInWithEmail}>
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
                <button type="submit" className="btn btn-primary mt-2 w-100">
                    Log In
                </button>
            </Form>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/signup">
                    Need an Account? Please Sign up!
                </NavLink>
                <br />
                <NavLink className="text-decoration-none" to="/reset">
                    Forget password? Reset!
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p> Login with</p>
            <button onClick={signInWithGoogle}>Google Signin</button>
            <button onClick={signInWithFacebook}>Facebook Signin</button>
        </div>
    );
};

export default Login;