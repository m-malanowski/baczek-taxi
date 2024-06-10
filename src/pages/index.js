import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import ScrollText from "../components/ScrollText/ScrollText";
import Pricing from "../components/Pricing/Pricing";

const IndexPage = () => (
    <>
        <Header/>
        <Hero/>
        <About/>

        <ScrollText text="Zamów taxi" isArrow={true}/>

        <Services/>
        <Pricing/>
        <div className="padding-top-md">
            <ScrollText text="662 567 931" isArrow={false} isNegative={true}/>
        </div>

        <Footer/>
    </>
);

export default IndexPage;
