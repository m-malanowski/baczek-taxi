import React, { useState, useEffect, useRef } from 'react';

const InViewWrapper = ({ children, delay = 0 }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (observer && observer.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`in-view-wrapper ${isInView ? 'in-view' : ''}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default InViewWrapper;
