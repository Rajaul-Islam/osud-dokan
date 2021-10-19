import React from 'react';
import { Col, Row, CardGroup, Card, Button } from 'react-bootstrap';
import call from "../../images/freeservice/call-center.png";
import delivery from "../../images/freeservice/delivery-service-new.png";
import online from "../../images/freeservice/online-doctor.png";
import { Link } from 'react-router-dom';

const FreeService = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={delivery} />
                    <Card.Body>
                        <Card.Title>Free Delivery</Card.Title>


                    </Card.Body>
                    <Link to={'/pending'}>
                    <Button className='text-center w-50 mx-5' variant="success">Details</Button>
                    </Link>
                </Card>
                <Card>
                    <Card.Img variant="top" src={call} />
                    <Card.Body>
                        <Card.Title>Help LIne (24/7)</Card.Title>
                    </Card.Body>
                    <Link to={'/pending'}>
                    <Button className='text-center w-50 mx-5' variant="success">Details</Button>
                    </Link>
                </Card>
                <Card>
                    <Card.Img variant="top" src={online} />
                    <Card.Body>
                        <Card.Title>Online Doctor</Card.Title>

                    </Card.Body>

                    <Link to={'/pending'}>
                    <Button className='text-center w-50 mx-5' variant="success">Details</Button>
                    </Link>

                </Card>
            </CardGroup>
        </div>
    );
};

export default FreeService;