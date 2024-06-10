import React from 'react';
import './services.scss';
import logoHero from '../../images/logoHero.svg';

const Services = () => (
    <section className="servicesSection section">
        <h3 className="font-500 width-75">Pickled craft beer you probably haven't heard of them chillwave, butcher YOLO
            roof party meggings try-hard +1 portland. Pickled craft beer y </h3>

        <div className="grid">
            <div className="col-6@lg"></div>
            <div className="col-6@lg">
                <h4 className="font-500 margin-top-lg">Pickled craft beer you probably haven't heard of them chillwave,
                    butcher YOLO roof party meggings try-hard +1 portland.</h4>
            </div>
        </div>

        <div className="servicesList">
            <div className="singleService">
                <img className="" src={logoHero} width={120} alt="Bączek TAXI"/>
                <h3>Pickled craf</h3>
                <h4 className="font-500 margin-top-lg text-center">Pickled craft beer you probably haven't heard of them chillwave,
                    butcher YOLO roof party meggings try-hard +1 portland.</h4>
            </div>
            <div className="singleService">
                <img className="" src={logoHero} width={120} alt="Bączek TAXI"/>
                <h3>Pickled craf</h3>
                <h4 className="font-500 margin-top-lg text-center">Pickled craft beer you probably haven't heard of them chillwave,
                    butcher YOLO roof party meggings try-hard +1 portland.</h4>
            </div>
            <div className="singleService">
                <img className="" src={logoHero} width={120} alt="Bączek TAXI"/>
                <h3>Pickled craf</h3>
                <h4 className="font-500 margin-top-lg text-center">Pickled craft beer you probably haven't heard of them chillwave,
                    butcher YOLO roof party meggings try-hard +1 portland.</h4>
            </div>
        </div>

    </section>
);

export default Services;
