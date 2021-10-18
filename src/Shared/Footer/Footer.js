import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="text-white">
        <div className="py-4 gradient">
          <Container>
            <Row>
              <Col md={6}>
                <div className="text-center my-2">
                  {/* <img width="120px" src={footerLogo} alt="" /> */}
                  <h1>this is an image</h1>
                </div>
  
                <ul className="list-unstyled">
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span className="ms-1 fs-5">Naogaon,Rajshahi,Bangladesh</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="ms-1 fs-5">
                      Official: coding.club.pro@gmail.com
                    </span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="ms-1 fs-5">
                      Helpline: 01763251119(Available:10:00AM to 10.00PM)
                    </span>
                  </li>
                </ul>
              </Col>
              <Col md={2}>
                <ul className="list-unstyled footer-link">
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses">Courses</NavLink>
                  </li>
                  <li>
                    <NavLink to="/policy">Policy</NavLink>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <div className="">
                  {/* <img
                    className="img-fluid"
                    src={payment}
                    alt="payment methods"
                  /> */}
                  <h1>Tshi is on image</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <hr className="m-0 p-0" />
        <p className="text-center m-0 py-3 copyright">
          Copyright © All Reserved by Coding Club pro - programming Community in
          2021
        </p>
      </div>
    );
};

export default Footer;