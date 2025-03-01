// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <span className="section-subtitle">Portfolio</span>
        <h2>Mes Projets</h2>
      </div>

      <div className="projects-inner">
        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-tags">
                <span>React</span>
                <span>UI/UX</span>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>Application Web Responsive</h3>
            <p>Création d'une interface utilisateur moderne avec React et styled-components pour une expérience fluide sur tous les appareils.</p>
            <div className="project-links">
              <a href="#" className="project-link primary">Voir le projet</a>
              <a href="#" className="project-link secondary">Code source</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-tags">
                <span>JavaScript</span>
                <span>Three.js</span>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>Visualisation 3D Interactive</h3>
            <p>Développement d'une expérience 3D interactive utilisant Three.js avec animations et interactions utilisateur avancées.</p>
            <div className="project-links">
              <a href="#" className="project-link primary">Voir le projet</a>
              <a href="#" className="project-link secondary">Code source</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <div className="project-overlay">
              <div className="project-tags">
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          <div className="project-content">
            <h3>API RESTful</h3>
            <p>Conception et implémentation d'une API RESTful avec Node.js et MongoDB pour la gestion de données utilisateur.</p>
            <div className="project-links">
              <a href="#" className="project-link primary">Voir le projet</a>
              <a href="#" className="project-link secondary">Code source</a>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-cta">
        <a href="https://github.com/votre-username" className="btn primary">Voir tous mes projets</a>
      </div>

      <div className="projects-shapes">
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>
    </section>
  );
};

export default Projects;