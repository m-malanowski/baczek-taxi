import React from 'react';
import './footer.scss';

const Footer = () => (
    <footer className="footerSection section" id="contact">
        <div className="grid">
            <div className="col-6@md">
                <h3>Bączek TAXI</h3>

                <h4 className="font-500">Jeśli potrzebujesz szybkiego i niezawodnego transportu, skontaktuj się z Bączek
                    TAXI. <br/> Jesteśmy dostępni 24/7, aby zapewnić Ci bezpieczną i komfortową podróż.</h4>
            </div>
            <div className="col-6@md flex">
                <a href="tel:+48662567931" className="button button--secondary margin-left-auto align-self-center inline-flex">
                    Zamów taksówkę
                </a>
            </div>
        </div>

    </footer>
);

export default Footer;
