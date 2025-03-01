import React from "react";
import { Link } from "react-router-dom";
import "./NavBarProject.css";

const NavBarProject = () => {
    return (
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
    );
}

export default NavBarProject;