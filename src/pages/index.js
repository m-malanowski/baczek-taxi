import React from 'react';
// import { Helmet } from "react-helmet";
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Footer from '../components/Footer';
import ScrollText from "../components/ScrollText/ScrollText";

const IndexPage = () => (
    <>
        {/*<Helmet>*/}
        {/*  <title>Home Page</title>*/}
        {/*</Helmet>*/}
        <Header/>
        <Hero/>
        <About/>

        <ScrollText/>

        <Services/>
        <Footer/>
    </>
);

export default IndexPage;
