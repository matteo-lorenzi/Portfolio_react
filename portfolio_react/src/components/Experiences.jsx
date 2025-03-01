import React from "react";
import "./Experiences.css";

const Experiences = () => {
    return (
        <section id="experiences" className="experiences">
            <div className="experiences-header">
                <span className="section-subtitle">Parcours</span>
                <h2>Expériences</h2>
            </div>

            <div className="experiences-inner">
                <div className="timeline">
                    <div className="experience">
                        <div className="experience-content">
                            <div className="experience-date">
                                <span>2020 - 2021</span>
                            </div>
                            <div className="experience-details">
                                <h3>Développeur web</h3>
                                <h4>Agence de communication</h4>
                                <p>
                                    J'ai travaillé en tant que développeur web junior dans une agence de communication.
                                    J'ai pu développer mes compétences en HTML, CSS, JavaScript et PHP.
                                </p>
                                <div className="experience-tags">
                                    <span>HTML/CSS</span>
                                    <span>JavaScript</span>
                                    <span>PHP</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience">
                        <div className="experience-content">
                            <div className="experience-date">
                                <span>2018 - 2020</span>
                            </div>
                            <div className="experience-details">
                                <h3>Designer UI/UX</h3>
                                <h4>Startup mobile</h4>
                                <p>
                                    J'ai travaillé en tant que designer UI/UX dans une start-up spécialisée dans le développement d'applications mobiles.
                                    J'ai pu développer mes compétences en design d'interface et en expérience utilisateur.
                                </p>
                                <div className="experience-tags">
                                    <span>UI Design</span>
                                    <span>UX Research</span>
                                    <span>Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experiences-shapes">
                <div className="shape shape-6"></div>
                <div className="shape shape-7"></div>
            </div>
        </section>
    );
};

export default Experiences;