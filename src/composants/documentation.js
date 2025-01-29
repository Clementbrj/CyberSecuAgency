import React from "react";
import { Link } from "react-router-dom";

function Documentation() {
    return (
        <div>
            {/* HEADER */}
            <div className="header">
                <div className="header_texture"></div>
                <div className="header_text">
                  <h1 class="Acceuil"><Link to="/">CyberSecurity Agency</Link></h1>
                </div>
                <div className="header_navbar">
                    <div className="header_navbar--menu">
                        <Link to="/" className="header_navbar--menu-link">Acceuil</Link> {/* Navigation */}
                        <Link to="/services" className="header_navbar--menu-link">Documentation</Link>
                        <Link to="/expertise" className="header_navbar--menu-link">Expertise</Link>
                    </div>
                </div>
            </div>

            {/* Contenu des services */}
            <div className="services-container">
                <h2>Nos Services</h2>
                <p>Voici une description des services que nous proposons...</p>
                <a href="/PDF/pdf1.pdf" download="pdf1.pdf">Télécharger la documentation 1</a>
            </div>
        </div>
    );
}

export default Documentation;
