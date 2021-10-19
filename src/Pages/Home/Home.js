import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';
import Banner from './Banner/Banner';
import Services from './Services/Services';



const Home = () => {
    const { medicines } = useAuth()
    return (
        <div>
            {/* <h1>{medicines.length}</h1> */}

            <Banner></Banner>
            <Container>
                <div>
                    <h1 className='text-center'>Prescription Medicines</h1>
                    <Row xs={1} md={2} className="g-4 ">
                        {
                            medicines.map(medicine => <Services key={medicine?.id} medicine={medicine}></Services>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Home;