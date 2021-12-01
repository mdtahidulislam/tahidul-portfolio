import React from 'react';
import { Link } from 'react-router-dom';
import pottery from '../../../images/pottery.png';

// const projects = [
//     {
//         "id": 1,
//         "title": "abc",
//         "description": "Lorem ipsum dolor sit amet.",
//         "technology": ["JS", "ES"]
//     }
// ]

const Work = () => {
    return (
        <section className="work" id="work">
            <div className="container">
                <article className="section-article">
                    <h2 className="section__title">Some Things I’ve Built</h2>
                </article>
                <div className="work-inner">
                    <ul>
                        <li className="work__grid">
                            <div className="project-img">
                                <Link to="/">
                                    <img src={pottery} alt="Pottery" />
                                </Link>
                            </div>
                            <div className="project">
                                <p className="project__overline">Featured Project</p>
                                <Link to="/">
                                    <h3 className="project__title">Pottery Order Website</h3>
                                </Link>
                                <div className="project__description">Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form.</div>
                                <ul className="project__tech">
                                    <li>React</li>
                                    <li>React Router 5</li>
                                    <li>Node</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                    <li>Material UI</li>
                                </ul>
                                <ul className="project__link">
                                    <li><a href="https://pottery-7f291.firebaseapp.com/">Live Site</a></li>
                                    <li><a href="https://github.com/mdtahidulislam/pottery-client-side-mern">Client Side Code</a></li>
                                    <li><a href="https://github.com/mdtahidulislam/pottery-client-side-mern">Server Side Code</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Work;