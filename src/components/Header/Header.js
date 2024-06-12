import React from 'react';
import './Header.scss';
import logo from "../../images/logoAbout.svg";

const Header = () => (
    <header className="headerSection">
        <img src={logo} width={60} alt="Bączek TAXI"/>
        <h4 className="font-600 logo">Bączek Taxi</h4>

        <nav>
            <ul>
                <li><a href="#about">O Bączek Taxi</a></li>
                <li><a href="#services">Usługi</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>

        <a href="tel:+48662567931" className="button button--secondary">
            Zamów taksówkę
        </a>

    </header>
);

export default Header;
