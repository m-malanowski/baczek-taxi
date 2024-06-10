import React from 'react';
import logoAbout from "../../images/logoAbout.svg";
import './About.scss';

const About = () => (
    <section className="aboutSection section">

        <div className="grid height-100">
            <div className="col-6@lg flex">
                <img className="logoAbout align-self-center " src={logoAbout} width={500} alt="Bączek TAXI"/>
            </div>
            <div className="col-6@lg">
                <h3 className="font-500">Pickled craft beer you probably haven't heard of them chillwave, butcher YOLO
                    roof party meggings try-hard +1 portland. Pickled craft beer y </h3>

                <h4 className="font-500 margin-top-lg">Pickled craft beer you probably haven't heard of them chillwave,
                    butcher YOLO roof party meggings try-hard +1 portland. Pickled craft beer you probably haven't heard
                    of them chillwave, butcher YOLO roof party meggings try-hard +1 portland. </h4>

                <div className="flex">
                    <a href="tel:+1234567890" className="button button--secondary margin-top-md margin-left-auto">
                        Zamów taksówkę
                    </a>
                </div>
            </div>
        </div>

    </section>
);

export default About;
