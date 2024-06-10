import React from 'react';
import './Hero.scss';
import logoHero from '../../images/logoHero.svg';

const Hero = () => (
    <section className='heroSection section'>
        <div className='heroGreeting'>
            <h2>Jeździsz dokąd <br/>
                chcesz, kiedy chcesz.</h2>
            <h4 className="font-500">Pickled craft beer you probably haven't heard of them chillwave, butcher YOLO
                roof party meggings try-hard +1 portland. Pickled craft beer y </h4>

            <a href="tel:+1234567890" className="button button--secondary margin-top-md">
                Zamów taksówkę
            </a>
        </div>
        <img className="heroLogo" src={logoHero} width={400} alt="Bączek TAXI"/>
    </section>
);

export default Hero;
