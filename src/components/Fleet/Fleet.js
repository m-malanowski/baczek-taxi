import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import fleet1 from "../../images/fleet1.jpg";
import './Fleet.scss';
import 'swiper/css';

const Fleet = () => (
    <section className="fleetSection">
        <Swiper
            className="swiperContainer"
            spaceBetween={50}
            slidesPerView={4}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            style={{cursor: 'grab', height: '550px', paddingBottom: 'var(--space-md)', marginTop: 'var(--space-md)'}}
        >
            <SwiperSlide className="fleet">
                <img className="logoAbout align-self-center" src={fleet1} alt="Bączek TAXI"/>
            </SwiperSlide>
            <SwiperSlide className="fleet">
                <img className="logoAbout align-self-center" src={fleet1} alt="Bączek TAXI"/>
            </SwiperSlide>
            <SwiperSlide className="fleet">
                <img className="logoAbout align-self-center" src={fleet1} alt="Bączek TAXI"/>
            </SwiperSlide>
            <SwiperSlide className="fleet">
                <img className="logoAbout align-self-center" src={fleet1} alt="Bączek TAXI"/>
            </SwiperSlide>
            {/* Add more SwiperSlide components as needed */}
        </Swiper>
    </section>
);

export default Fleet;
