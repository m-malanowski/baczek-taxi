import React, {useState, useEffect, useRef} from 'react';
import './Hero.scss';
import logoHero from '../../images/logoHero.svg';
import fleet1 from '../../images/fleet1.jpg';
import InViewWrapper from "../InViewWrapper";

const Hero = () => {
    const [showImage, setShowImage] = useState(false);
    const [mousePositions, setMousePositions] = useState([]);
    const trailLength = 10; // Number of trailing images

    const spanRef = useRef(null);
    const requestRef = useRef(null);

    const updateMousePosition = (event) => {
        const newPosition = {x: event.clientX, y: event.clientY};
        setMousePositions((prevPositions) => {
            const updatedPositions = [...prevPositions, newPosition];
            if (updatedPositions.length > trailLength) {
                updatedPositions.shift(); // Remove the oldest position
            }
            return updatedPositions;
        });
    };

    const animate = () => {
        if (showImage) {
            setMousePositions((prevPositions) => {
                const updatedPositions = prevPositions.map((pos, index) => {
                    const nextPos = prevPositions[index + 1] || pos;
                    return {
                        x: pos.x + (nextPos.x - pos.x) * 0.2,
                        y: pos.y + (nextPos.y - pos.y) * 0.2,
                    };
                });
                return updatedPositions;
            });
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (showImage) {
                updateMousePosition(event);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, [showImage]);

    return (
        <section
            className='heroSection section border-bottom'
            onMouseLeave={() => setShowImage(false)}
            onClick={() => setShowImage(false)}
        >
            <div className="grid gap-xxxl">
                <div className="col-6@sm">
                    <InViewWrapper>
                        <h2>Transport na każdą okazję!</h2>
                    </InViewWrapper>
                    <InViewWrapper delay={0.25}>
                    <h4 className="font-500 margin-top-md">
                            Przewozy na lotnisko, do Krynicy Morskiej oraz obsługa imprez. Oferujemy
                            <span
                                ref={spanRef}
                                className="hover-span"
                                onMouseEnter={() => setShowImage(true)}
                            >
                            komfortowe przejazdy,
                        </span>
                            wyposażone w foteliki dla dzieci, co gwarantuje bezpieczeństwo dla najmłodszych pasażerów.
                            Niezależnie od pory dnia, czy nocy, możesz na nas polegać.
                        </h4>
                    </InViewWrapper>
                    <InViewWrapper delay={0.5}>
                        <a href="tel:+48662567931" className="button button--secondary margin-top-lg inline-flex">
                            Zamów taksówkę
                        </a>
                    </InViewWrapper>
                </div>
                <div className="col-6@sm">
                    <InViewWrapper>
                        <img className="heroLogo" src={logoHero} width={400} alt="Bączek TAXI"/>
                    </InViewWrapper>
                </div>
            </div>

            {showImage && mousePositions.map((pos, index) => (
                <div
                    key={index}
                    className="hover-image"
                    style={{
                        top: pos.y,
                        left: pos.x,
                        opacity: 1 - index / trailLength,
                    }}
                >
                    <img className="logoAbout align-self-center" src={fleet1} alt="Bączek TAXI"/>
                </div>
            ))}
        </section>
    );
};

export default Hero;
