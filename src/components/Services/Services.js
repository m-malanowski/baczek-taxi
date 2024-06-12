import React from 'react';
import './services.scss';
import logoHero from '../../images/logoHero.svg';
import waitingLogo from '../../images/waitingLogo.svg';
import ridingLogo from '../../images/ridingLogo.svg';
import InViewWrapper from "../InViewWrapper";

const Services = () => (
    <section className="servicesSection section" id="services">
        <h3 className="font-500 width-75">Dzięki nowoczesnym samochodom i uprzejmym kierowcom każda podróż z Bączek TAXI
            to komfort i spokój. Zaufaj nam, a zapewnimy Ci najwyższy standard usług transportowych.</h3>

        <div className="grid">
            <div className="col-6@lg"></div>
            <div className="col-6@lg">
                <h4 className="font-500 margin-top-lg">Wybierz Bączek TAXI i odkryj, jak przyjemna może być podróż!
                    Gwarantujemy, że dotrzesz do celu na czas, bez stresu i w pełnym komforcie. Niezależnie od tego, czy
                    potrzebujesz szybkiego przejazdu po mieście, transferu na lotnisko, czy obsługi imprezy, jesteśmy do
                    Twojej dyspozycji. </h4>
            </div>
        </div>

        <div className="servicesList">
            <div className="singleService">
                <InViewWrapper>
                    <img className="" src={logoHero} width={120} alt="Bączek TAXI"/>
                </InViewWrapper>
                <h3 className="text-center">Bezpieczeństwo</h3>
                <h4 className="font-500  text-center">Zawsze priorytetowo traktujemy bezpieczeństwo naszych
                    pasażerów, zapewniając foteliki dla dzieci i przestrzegając wszelkich przepisów.</h4>
            </div>
            <div className="singleService">
                <InViewWrapper>
                    <img className="" src={waitingLogo} width={120} alt="Bączek TAXI"/>
                </InViewWrapper>
                <h3 className="text-center">Niezawodność</h3>
                <h4 className="font-500  text-center">Nasza niezawodność polega na punktualności, profesjonalizmie i
                    dostępności 24/7. Działamy na terenie Elbląga, wykonując kursy do Gdańska, na lotnisko i do Krynicy
                    Morskiej. </h4>
            </div>
            <div className="singleService">
                <InViewWrapper>
                    <img className="" src={ridingLogo} width={160} alt="Bączek TAXI"/>
                </InViewWrapper>
                <h3 className="text-center">Elastyczność</h3>
                <h4 className="font-500  text-center">Oferujemy szeroki zakres usług, w tym obsługę imprez
                    z płatnością godzinową. Dopasowujemy się do Twoich potrzeb, aby zapewnić maksymalny komfort
                    podróży.</h4>
            </div>
        </div>

    </section>
);

export default Services;
