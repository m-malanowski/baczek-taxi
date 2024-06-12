import React from 'react';
import logoAbout from "../../images/logoAbout.svg";
import './About.scss';
import InViewWrapper from "../InViewWrapper";

const About = () => (
    <section className="aboutSection section" id="about">

        <div className="grid height-100">
            <div className="col-6@lg flex">
                <InViewWrapper>
                    <img className="logoAbout align-self-center " src={logoAbout} width={500} alt="Bączek TAXI"/>
                </InViewWrapper>
            </div>
            <div className="col-6@lg">
                <h3 className="font-500">Nasze pojazdy są wyposażone w foteliki dla dzieci, zapewniając bezpieczną
                    podróż całej rodzinie. Oferujemy transfery na lotnisko, przewozy lokalne oraz obsługę imprez.</h3>

                <h4 className="font-500 margin-top-lg">Bączek TAXI to profesjonalna firma transportowa działająca na
                    terenie Elbląga. Oferujemy niezawodne i bezpieczne przewozy do Gdańska, na lotnisko oraz do Krynicy
                    Morskiej. Posiadamy licencję taxi, co gwarantuje zgodność z normami prawnymi.
                    <br/><br/>
                    Zaufaj Bączek TAXI i ciesz się spokojną podróżą!
                </h4>

                <div className="flex">
                    <a href="tel:+48662567931" className="button button--secondary margin-top-md margin-left-auto">
                        Zamów taksówkę
                    </a>
                </div>
            </div>
        </div>

    </section>
);

export default About;
