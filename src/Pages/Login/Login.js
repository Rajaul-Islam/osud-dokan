import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import useFirebase from '../../Hook/useFirebase';

const Login = () => {
    // const {signInWithGoogle}=useFirebase()
    const {signInWithGoogle}=useAuth()
    return (
        <div>
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

                            type="password"
                            autoComplete="current-password"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <button onClick={signInWithGoogle}>Google Signin</button>
        </div>
    );
};

export default Login;