import React from 'react';
import myResume from './../../../tahidul_islam_full_stack_developer.pdf'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <article>
                    <p className="hero__lead">Hi, my name is</p>
                    <h1 className="hero__title">Tahidul Islam</h1>
                    <h2 className="hero__title">I build things for the web.</h2>
                    <p className="hero_text">I’m a WEb Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.</p>
                    <a className="btn" href={myResume} download>Download Resume</a>
                </article>
            </div>
        </section>
    );
};

export default Hero;