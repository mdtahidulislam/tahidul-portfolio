import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <About></About>
        </div>
    );
};

export default Home;