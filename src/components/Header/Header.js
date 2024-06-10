import React from 'react';
import './Header.scss';
import logo from '../../images/logo.svg';

const Header = () => (
    <header className="headerSection">
        <img src={logo} width={60} alt="Bączek TAXI"/>
        <h4 className="font-600">Bączek Taxi</h4>

        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
        </nav>

        <a href="tel:+1234567890" className="button button--secondary">
            Zamów taksówkę
        </a>

    </header>
);

export default Header;
