import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container container--experience">
                <article className="section-article">
                    <h2 className="section__title">Where I’ve Worked</h2>
                </article>
                <div className="experience-inner">
                    <div className="company">
                        <p>TexLAB IT</p>
                    </div>
                    <div className="position">
                        <h3>Web Developer Trainer</h3>
                        <span>Aug 2017 - March 2018</span>
                        <ul>
                            <li>Organized and taught Basic Web development, PSD to HTML, Javascript, jQuery etc.</li>
                            <li>Taught Wordpress CMS (customization)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;