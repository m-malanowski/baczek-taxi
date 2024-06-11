import React from 'react';
import waitingLogo from '../../images/waitingLogo.svg';
import PricingCard from '../PricingCard/PricingCard';
import useScrollAnimation from '../useScrollAnimation';
import './pricing.scss';

const Pricing = () => {
    useScrollAnimation();

    return (
        <section className="pricingSection">
            <h3 className="text-center">Nasz cennik</h3>

            <div className="pricingWrapper">
                <PricingCard text="Opłata wstępna" price="6" logo={waitingLogo}/>
                <PricingCard text="Przejazd 1 km" price="3" logo={waitingLogo}/>
                <PricingCard text="Przejazd nocny" price="4" logo={waitingLogo}/>
            </div>
        </section>
    );
};

export default Pricing;
