import React from "react";
import { Link } from "react-router-dom";

function Documentation() {
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

        {/* ---------------  */}
        <div className="Title-patern">
        <h3 className="Title">PRESENTATIONS</h3>
        </div>

        <div className="card-align">
        <ul className="card">
          <li className ="card">
            <h3><strong>CyberSecurity Débutant</strong></h3>
            <p>PowerPoint de la présentation</p>
            <a href="/PDF/Powerpoint-Debutant.pdf" download="Powerpoint Debutant.pdf"><img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png `} alt="Pp Débutant"/></a>
          </li> 
          </ul>

        {/* --- */}

          </div>
          {/* ||||||||||||||||||||||||||||||||||||| */}
          <div className="Title-patern">
          <h3 className="Title">DOCUMENTATION</h3>
          </div>

        <div className="card-align">
        <ul className="card">
          <li className ="card">
            <h3><strong>Guide OWASP</strong></h3>
            <p>Comprendre les 10 failles les plus répandues de l'OWASP !</p>
            <a href="/PDF/Guide OWASP.pdf" download="Guide OWASP.pdf"><img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png `} alt="Guide OWASP"/></a>
          </li> 
          </ul>
          {/* --- */}
            <ul className="card">
            <li className="card">
            <h3><strong>Securité Web</strong></h3>
            <p>Quelques bonnes pratiques et conseils sur la conception de site web</p>
            <a href="/PDF/Guide sécurité site.pdf" download="Guide sécurité site.pdf"><img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png `} alt="Document OWASP"/></a>
            </li>
            </ul>
        {/* --- */}
        <ul className="card">
          <li className ="card">
            <h3><strong>StarterPack Utilisateur</strong></h3>
            <p>Vérifier vos notions sur les bases de la cybersécurité !</p>
            <a href="/PDF/Les-bases-cyber.pdf" download="Les bases en cybersécurité.pdf"><img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png `} alt="Bases utilisateurs en CyberSécurité"/></a>
          </li> 
        </ul>
        </div>
    
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

export default Documentation;
