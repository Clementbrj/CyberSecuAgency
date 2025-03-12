import React from "react";
import { Link } from "react-router-dom";

// Mise en page de l'HTML 
function Expertise() {
  return (
    <div>
      <div className="header">
        <div className="header_texture"></div>
          <div className="header_text">
            <h1 class="Acceuil"><Link to="/">CyberSecurity Agency</Link></h1>
          </div>
        <div className="header_navbar">
          <div className="header_navbar--menu">
            <Link to="/" className="header_navbar--menu-link">Accueil</Link> {/* Navigation */}
            <Link to="/services" className="header_navbar--menu-link">Documentation</Link>
            <Link to="/expertise" className="header_navbar--menu-link">Expertise</Link>
          </div>
        </div>
      </div>


      {/* 1ER étage de compétences */}
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
            <p>Ce programme a pour objectif d’aider les administrateurs BDD ayant besoin de sécuriser leurs bases de données.
            e</p>
          </li> 
        </ul>
      </div>
  

      {/* Footer */}
      <div className="footer">
        <div className="footer_text">
          <div className="containerfooter">
            <div className="column">
              <h2>Prennez RDV</h2>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd8-53Pz-hDo81wTA1ALh6Ql5Cp0lz1eyKgH1cCoL0b3zBTlA/viewform?vc=0&c=0&w=1&flr=0">
              <p className="FooterForm">Remplir le formulaire</p></a>
            </div>
            <div className="column">
            <h2><center>Contacts</center></h2>

            <div className="contact">
            <a href="https://www.instagram.com/cybersec.agency/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/insta.png`} alt="Instagram"/>
            </a>

            <a href="https://x.com/cyb_secu_agency" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/twitter.png`} alt="X" />
            </a>

            <a href="mailto:ynov.cybersecagency@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/mail.png`} alt="Mail" />
            </a>
            </div>


            </div>
          </div>
          <h4>Tout droits réservés 2025</h4>
        </div>
      </div>
    </div>
  );
}

export default Expertise;