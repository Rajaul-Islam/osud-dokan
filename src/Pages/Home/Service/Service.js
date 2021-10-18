import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({ medicine }) => {

    const { img, name } = medicine;
    console.log(img);
    return (
        <div>

            <Col>
                <Card>
                    <Card.Img className='img-style' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;