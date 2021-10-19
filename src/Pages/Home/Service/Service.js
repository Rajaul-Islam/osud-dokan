
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../Hook/useAuth';

import './Service.css'

const Service = () => {
    const { serviceId } = useParams();
    console.log(serviceId)
    const { medicines } = useAuth()
    // const [medicines, setMedicines] = useState([])

    // useEffect(() => {
    //     fetch('medicine.json')
    //         .then(rsc => rsc.json())
    //         .then(data => {
    //             setMedicines(data)
    //             console.log(data);
    //         })
    // }, [])

const findService=medicines.find(medicine=>medicine.id=== Number(serviceId))
console.log(medicines);
// const isFind=;
// const { id,img, name,price,generics,introduction } = findService;
    return (
        <div>
            {
                findService?.name?<>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col>
                        <img className='img-fluid' src={findService.img} alt="" />
                        </Col>
                        <Col>
                        <h2>{findService.name}</h2>
                        <h4>{findService.generics}</h4>
                        <p>{findService.price}</p>
                        <p>{findService.introduction}</p>

                        </Col>
                    </Row>
                  
                </Container>
                </>: <h1>NO page found</h1>
            }
            

        </div>
    );
};

export default Service;