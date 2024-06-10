import React from 'react';
import './pricingCard.scss';

const PricingCard = ({ text, price, logo }) => (
    <div className="pricingCard">
        <h4 className="text-center">{text}</h4>
        <div className="price">
            <span className="digit">{price}</span>
            <span className="currency">Zł</span>
        </div>
        <img className="pricingLogo" src={logo} width={220} alt="Bączek TAXI"/>
    </div>
);

export default PricingCard;
