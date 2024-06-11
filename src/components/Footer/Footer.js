import React from 'react';
import './footer.scss';
import ridingLogo from '../../images/ridingLogo.svg';

const Footer = () => (
    <footer className="footerSection section" id="contact">
        <h3 className="font-500">Jeśli potrzebujesz szybkiego i niezawodnego transportu, skontaktuj się z
            Bączek
            TAXI. Jesteśmy dostępni 24/7, aby zapewnić Ci bezpieczną i komfortową podróż.</h3>
        <div className="grid">
            <div className="col-6@lg ridingLogoWrapper">
                <img className="" src={ridingLogo} width={220} alt="Bączek TAXI"/>
            </div>
            <div className="col-6@lg">
                <h4 className="font-500 margin-top-lg">Wybierz Bączek TAXI i odkryj przyjemność podróży! Gwarantujemy
                    punktualność, komfort i brak stresu. Niezależnie od tego, czy potrzebujesz przejazdu po mieście,
                    transferu na lotnisko, czy obsługi imprezy, jesteśmy do Twojej dyspozycji.
                </h4>


                <div className="flex">
                    <a href="tel:+48662567931"
                       className="button button--secondary margin-left-auto margin-top-md align-self-center inline-flex">
                        Zamów taksówkę
                    </a>
                </div>

            </div>
        </div>
        <small>&copy; {new Date().getFullYear()} Bączek TAXI. All rights reserved.</small>
    </footer>
);

export default Footer;
