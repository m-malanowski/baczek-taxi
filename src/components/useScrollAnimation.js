import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.pricingCard');
            const windowHeight = window.innerHeight;

            cards.forEach((card, index) => {
                const cardTop = card.getBoundingClientRect().top;

                if (index === 0 || cardTop < windowHeight - (index * 350)) {
                    card.classList.add('is-visible');
                } else {
                    card.classList.remove('is-visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default useScrollAnimation;
