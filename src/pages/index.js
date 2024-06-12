import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import ScrollText from "../components/ScrollText/ScrollText";
import Pricing from "../components/Pricing/Pricing";
import Fleet from "../components/Fleet/Fleet";

const IndexPage = () => (
    <>
        <Header/>
        <Hero/>
        <About/>
        <ScrollText text="Zamów taxi" isArrow={true}/>
        <Services/>

        <ScrollText text="Nasza flota" isArrow={false} isNegative={true}/>
        <Fleet/>
        {/*<Pricing/>*/}

        <Footer/>
    </>
);

export default IndexPage;
