import React from 'react';
import './Hero.scss';
import logoHero from '../../images/logoHero.svg';

const Hero = () => (
    <section className='heroSection section'>
        <div className="grid gap-xxxl">
            <div className="col-6@md">
                <h2>Transport na każdą okazję!</h2>
                <h4 className="font-500">Przewozy na lotnisko, do Krynicy Morskiej oraz obsługa imprez. Oferujemy
                    komfortowe przejazdy, wyposażone w foteliki dla dzieci, co gwarantuje bezpieczeństwo dla
                    najmłodszych pasażerów. Niezależnie od pory dnia, czy nocy, możesz na nas polegać.</h4>

                <a href="tel:+48662567931" className="button button--secondary margin-top-lg inline-flex">
                    Zamów taksówkę
                </a>
            </div>
            <div className="col-6@md">
                <img className="heroLogo" src={logoHero} width={400} alt="Bączek TAXI"/>
            </div>
        </div>

    </section>
);

export default Hero;
