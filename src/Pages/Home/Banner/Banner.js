import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner/banner1.webp";
import banner2 from "../../../images/banner/banner2.webp";
import banner3 from "../../../images/banner/banner3.webp";
import './Banner.css'





const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block img-style w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-success font-bold'>
                        <h3>Hope for a better tomorrow.</h3>
                        <p>We know you. We care for you. We’re with you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img

                        className="d-block img-style w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-success'>
                        <h3>In Love with Life.</h3>
                        <p>Instantly notify your doctor of any health problems.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-style w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-success'>
                        <h3>A commitment to community.</h3>
                        <p>Get the best healthcare experience, without having to leave home </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;