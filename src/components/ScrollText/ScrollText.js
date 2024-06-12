import React, { useEffect, useRef } from 'react';
import './ScrollText.scss';
import star from '../../images/star.svg';
import rightArrow from '../../images/rightArrow.svg';

const ScrollText = ({ text, isArrow, isNegative }) => {
    const scrollContainerRef = useRef(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = scrollContainerRef.current;
            if (scrollContainer) {
                const direction = window.scrollY > lastScrollY.current ? 'down' : 'up';
                lastScrollY.current = window.scrollY;

                if (direction === 'down') {
                    scrollContainer.scrollLeft += 10;
                } else {
                    scrollContainer.scrollLeft -= 10;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            {isArrow && <img src={rightArrow} alt="arrow" className="scrollArrow" />}

            <div className="scrollContainer">
                <div className={`scrollText ${isNegative ? 'negative' : ''}`}  ref={scrollContainerRef}>
                    <span>{text}</span>
                    <img src={star} alt="star" className="starIcon"/>
                    <span>{text}</span>
                    <img src={star} alt="star" className="starIcon"/>
                    <span>{text}</span>
                    <img src={star} alt="star" className="starIcon"/>
                    <span>{text}</span>
                    <img src={star} alt="star" className="starIcon"/>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
};

export default ScrollText;
