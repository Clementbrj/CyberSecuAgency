import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css"; 

function Services() {
    return (
        <div>
            {/* HEADER */}
            <div className="header">
                <div className="header_texture"></div>
                <div className="header_text">
                    <h1>CyberSecurity Agency</h1>
                </div>
                <div className="header_navbar">
                    <div className="header_navbar--menu">
                        <Link to="/" className="header_navbar--menu-link">Acceuil</Link> {/* Navigation */}
                        <Link to="/services" className="header_navbar--menu-link">Services</Link>
                        <Link to="/forms" className="header_navbar--menu-link">Formulaire</Link>
                    </div>
                </div>
            </div>

            {/* Contenu des services */}
            <div className="services-container">
                <h2>Nos Services</h2>
                <p>Voici une description des services que nous proposons...</p>
            </div>
        </div>
    );
}

export default Services;
