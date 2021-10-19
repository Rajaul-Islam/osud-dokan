import React, { useEffect, useState } from 'react';
import { Card, Col, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import Service from '../Service/Service';

const Services = ({medicine}) => {
    const { id,img, name,price,generics } = medicine;

    // const [medicines, setMedicines] = useState([])

    // useEffect(() => {
    //     fetch('medicine.json')
    //         .then(rsc => rsc.json())
    //         .then(data => {
    //             setMedicines(data)
    //             console.log(data);
    //         })
    // }, [])
    return (
        <div>
            
            <Col>
                <Card>
                    <Card.Img className='img-style img-fluid' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                       <h4>{generics}
                       </h4>
                       <h5>{price}</h5>
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Body className='d-flex'>
                    <Link to={`/service/${id}`}>
                    <Button className='text-center w-100 mx-5' variant="success">Details</Button>
                    </Link>


                    <Button className='text-center  mx-5' variant="success">Add To Cart</Button>
                    </Card.Body>
                    
                </Card>
            </Col>
        </div>
    );
};

export default Services;