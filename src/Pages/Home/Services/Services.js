import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [medicines, setMedicines] = useState([])

    useEffect(() => {
        fetch('medicine.json')
            .then(rsc => rsc.json())
            .then(data => {
                setMedicines(data)
                console.log(data);
            })
    }, [])
    return (
        <div>
            <h1 className='text-center'>Prescription Medicines</h1>
            <div>
                <Row xs={1} md={2} className="g-4 container-fluid">
                 {
                     medicines.map(medicine=><Service medicine={medicine}></Service>)
                 }
                </Row>
            </div>
        </div>
    );
};

export default Services;