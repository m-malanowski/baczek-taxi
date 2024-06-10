import React from 'react';
import waitingLogo from '../../images/waitingLogo.svg';
import './pricing.scss';

const Pricing = () => (
    <section className="pricingSection">
        <div className="pricingWrapper">
            <h3 className="text-center">Nasz cennik</h3>

            <div className="pricingCard">
                <h4 className="text-center">Opłata wstępna</h4>
                <div>
                    <span className="digit">6</span>
                    <span className="currency">Zł</span>
                </div>
                <img className="pricingLogo" src={waitingLogo} width={220} alt="Bączek TAXI"/>
            </div>
        </div>

    </section>
);

export default Pricing;
