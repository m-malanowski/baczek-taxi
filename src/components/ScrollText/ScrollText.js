import React, {useEffect, useRef} from 'react';
import './ScrollText.scss';
import star from '../../images/star.svg';
import rightArrow from '../../images/rightArrow.svg';

const ScrollText = () => {
    const scrollContainerRef = useRef(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = scrollContainerRef.current;
            if (scrollContainer) {
                const direction = window.scrollY > lastScrollY.current ? 'down' : 'up';
                lastScrollY.current = window.scrollY;

                if (direction === 'down') {
                    scrollContainer.scrollLeft += 10; // Adjust scroll speed as needed
                } else {
                    scrollContainer.scrollLeft -= 10; // Adjust scroll speed as needed
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            <img src={rightArrow} alt="star" className="scrollArrow"/>

            <div className="scrollContainer" ref={scrollContainerRef}>
                <div className="scrollText">
                    <span>Zamów taxi</span>
                    <img src={star} alt="star" className="starIcon"/>
                    <span>Zamów taxi</span>
                    <img src={star} alt="star" className="starIcon"/>
                    <span>Zamów taxi</span>
                    <img src={star} alt="star" className="starIcon"/>
                    <span>Zamów taxi</span>
                </div>
            </div>
        </div>


    );
};

export default ScrollText;
