import React from 'react';
import { Link } from 'react-router-dom';
import './AllProjects.css';
import Headers from '../components/Header.jsx';

const AllProjects = () => {
    // Mise à jour des projets pour correspondre au document
    const projects = [
        { id: 1, title: 'Terraforma', description: 'Création d’un jeu vidéo ludo-éducatif pour un niveau de 3ème en SVT.' },
        { id: 2, title: 'GameJam', description: 'Création d’un jeu en lien avec l’IUT.' },
        { id: 3, title: 'Fish’Event', description: 'Développement d\'une application évènementielle pour la pêche.' },
        { id: 4, title: 'Comparaison d’approches algorithmiques', description: 'Comparaison d’approches algorithmiques.' },
        { id: 5, title: 'Site web pour élèves de 3ème', description: 'Site web simplifiant la recherche de stage pour les élèves de 3ème.' },
        { id: 6, title: 'Installation d\'un poste pour le développement', description: 'Installation d\'un poste pour le développement.' },
    ];

    return (
        <>
            <Headers />
            <main>
                <div className="all-projects">
                    <aside className="sidebar">
                        <div className="sidebar-header">
                            <h2>Navigation</h2>
                        </div>
                        <nav className="sidebar-nav">
                            <ul>
                                <li><Link to="/all-projects">Tous les projets</Link></li>
                                <li><Link to="/all-projects/category/recents">Projets récents</Link></li>
                                <li><Link to="/all-projects/category/anciens">Projets anciens</Link></li>
                                <li><Link to="/all-projects/a-propos">À propos</Link></li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="content">
                        <header className="wiki-header">
                            <h1>Wiki de Projets</h1>
                            <p>
                                Bienvenue sur mon wiki de projets. Cliquez sur un projet pour en savoir plus ou parcourez les catégories via la navigation.
                            </p>
                        </header>
                        <section className="projects-content">
                            {projects.map((project) => (
                                <article key={project.id} className="project-card">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <Link to={`/projects/${project.id}`} className="btn secondary">
                                        En savoir plus
                                    </Link>
                                </article>
                            ))}
                        </section>
                    </main>
                </div>
            </main>
        </>

    );
};

export default AllProjects;
