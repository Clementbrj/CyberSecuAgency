import React from "react";
import { Link } from "react-router-dom";

// Mise en page de l'HTML 
function Expertise() {
  return (
    <main>
      <header>
        <nav className="header_navbar">
          <div className="h1_navbar">
            <h1><Link to="/">CyberSecurity Agency</Link></h1>
          </div>
          <div className="content_navbar">
            <Link to="/">Accueil</Link>
            <Link to="/services">Documentation</Link>
            <Link to="/expertise">Expertise</Link>
          </div>
        </nav>
      </header>


      {/* 1ER étage de compétences */}
    <section>
        <div className="column-align">
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-debutant.png `} alt="Conseil débutant" height="204" width="220"/>
              <h3><strong>Conseil Débutant</strong></h3>
              <p>Ce programme a pour objectif de sensibiliser les utilisateurs ayant peu de connaissances en cybersécurité et de leur fournir des bases solides.</p>
            </li> 
          </ul>
          {/* --- */}
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-intermediaire.png `} alt="Conseil intermediaire" height="204" width="220"/>
              <h3><strong>Conseil intermediaire</strong></h3>
              <p>Ce programme a les mêmes objectifs que « Conseil Débutant », cependant celui-ci se dirige vers des utilisateurs plus expérimentés.</p>
            </li> 
          </ul>
          {/* --- */}
          </div>
          <div className="column-align">
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-secu web.jpg `} alt="Conseil sécu web" height="204" width="220"/>
              <h3><strong>Conseil de sécurité Web</strong></h3>
              <p>Ce programme a les mêmes objectifs que « Conseil Débutant », cependant celui-ci se dirige vers des utilisateurs plus expérimentés.</p>
            </li> 
          </ul>
          {/* --- */}
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-secu cyber.png `} alt="Conseil sécu cyber" height="204" width="220"/>
              <h3><strong>Conseil sécurité réseau </strong></h3>
              <p>Ce programme a pour objectif d’aider les administrateurs réseaux ayant besoin de sécuriser leurs architectures au sein de leurs entreprises.</p>
            </li> 
          </ul>


        {/* 2EME étage */}
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-bdd.png `} alt="Conseil bdd" height="204" width="220"/>
              <h3><strong>Conseil sécurité base de données</strong></h3>
              <p>Ce programme a pour objectif d'aider les administrateurs BDD ayant besoin de sécuriser leurs bases de données.
              e</p>
            </li> 
          </ul>
        </div>
    </section>

      {/* Footer */}
      <footer>
        <section className="footer">
          <div className="footer_contact">
              <h2>Contact</h2>
              <p>Email : <a href="mailto:contact@cybersec.com">contact@cybersec.com</a></p>
              <p>Téléphone : <a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
          </div>

          <div className="footer_social">
              <h2>Suivez-nous</h2>
              <div className="social_links">
                <a href="https://www.instagram.com/cybersec" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/insta.png`} alt="Instagram" />
                </a>
                <a href="https://twitter.com/cybersec" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/twitter.png`} alt="Twitter" />
                </a>
                <a href="https://twitter.com/cybersec" target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/linkedin.png`} alt="LinkedIn" />
                </a>
              </div>
          </div>

            <div className="footer_desc">
              <h2>À propos</h2>
              <p>CyberSecurity Agency est une entreprise dédiée à la protection numérique et la sensibilisation à la cybersécurité.</p>
            </div>
        </section>
        <div className="footer_privacy">
            <p>© 2025 CyberSecurity Agency - Tous droits réservés</p>
        </div>
      </footer>

    </main>
  );
}

export default Expertise;