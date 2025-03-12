import React from "react";
import { Link } from 'react-router-dom';
import "../styles/documentation.css"; 
import "../styles/expertise.css"; 

function Acceuil() {
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
            <li className="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/sensibilisation.png`} alt="Service 1" />
              <h3><strong>Sensibilisation</strong></h3>
              <p>
                La CyberSecurity Agency vient à vous.<br />
                Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br />
                <br />
                Voir le service
              </p>
            </li> 
          </ul>
          <ul className="columnbody">
            <li className="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/sensibilisation.png`} alt="Service 2" />
              <h3><strong>Sensibilisation</strong></h3>
              <p>
                La CyberSecurity Agency vient à vous.<br />
                Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br />
                <br />
                Voir le service
              </p>
            </li> 
          </ul>
        </div>

        {/* 2EME étage */}
        <div className="column-align">
          <ul className="columnbody">
            <li className="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/sensibilisation.png`} alt="Service 3" />
              <h3><strong>Sensibilisation</strong></h3>
              <p>
                La CyberSecurity Agency vient à vous.<br />
                Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br />
                <br />
                Voir le service
              </p>
            </li> 
          </ul>
          <ul className="columnbody">
            <li className="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/sensibilisation.png`} alt="Service 4" />
              <h3><strong>Sensibilisation</strong></h3>
              <p>
                La CyberSecurity Agency vient à vous.<br />
                Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br />
                <br />
                Voir le service
              </p>
            </li> 
          </ul>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
  <div className="footer_container">
    <div className="footer_column">
      <h2>Contact</h2>
      <p>Email : <a href="mailto:contact@cybersec.com">contact@cybersec.com</a></p>
      <p>Téléphone : <a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
    </div>

    <div className="footer_column">
      <h2>Suivez-nous</h2>
      <div className="social_links">
        <a href="https://www.instagram.com/cybersec" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/IMG/footer/instagram.png`} alt="Instagram" />
        </a>
        <a href="https://twitter.com/cybersec" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/IMG/footer/twitter.png`} alt="Twitter" />
        </a>
        <a href="https://linkedin.com/company/cybersec" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/IMG/footer/linkedin.png`} alt="LinkedIn" />
        </a>
      </div>
    </div>

    <div className="footer_column">
      <h2>À propos</h2>
      <p>CyberSecurity Agency est une entreprise dédiée à la protection numérique et la sensibilisation à la cybersécurité.</p>
    </div>
  </div>
  
  <div className="footer_bottom">
    <p>© 2025 CyberSecurity Agency - Tous droits réservés</p>
  </div>
</footer>

    </main>
  );
}

export default Acceuil;
