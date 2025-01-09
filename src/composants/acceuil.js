import React from "react";

// Librairie pour la Navigation
import { Link } from 'react-router-dom';
// CSS
import "../styles/acceuil.css";

// Mise en page de l'HTML 
function Acceuil() {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="header_texture"></div>
        <div className="header_text">
          <h1>CyberSecurity Agency</h1>
        </div>
        <div className="header_navbar">
          <div className="header_navbar--menu">
            <Link to="/" className="header_navbar--menu-link">Accueil</Link> {/* Navigation */}
            <Link to="/services" className="header_navbar--menu-link">Documentation</Link>
            <Link to="/expertise" className="header_navbar--menu-link">Expertise</Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="containerbody">
        <ul className="columnbody">
          <li>
            <img src={`${process.env.PUBLIC_URL}/IMG/sensibilisation.png `} alt="Sensibilisation" height="204" width="220"/>
            <h3><strong>Sensibilisation</strong></h3>
            <p>La CyberSecurity Agency viens à vous. <br></br>
               Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br></br>
               <br></br>
              Voir le service</p>
          </li> 
          <li>
            <img src={`${process.env.PUBLIC_URL}/IMG/consultation.jpeg`} alt="Consultation" height="204" width="220"/>
            <h3><strong>Consultation</strong></h3>
            <p>Vous rencontrez des problèmes de cybersécurité ? <br></br>
               Nous pouvons vous fournir notre expertise et diagnostiquer vos problèmes<br></br>
               Et leurs solutions ! <br></br> <br></br>
              Voir le service</p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/images/placeholder.jpg`} alt="Img" height="204" width="220"/>
            <h3><a href="blog.html">Service 3</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi tortor.</p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/images/placeholder.jpg`} alt="Img" height="204" width="220"/> 
            <h3><a href="blog.html">Service 4</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec mi tortor.</p>
          </li>
        </ul>
      </div>

    {/* Footer */}
      <div className="footer">
        <div className="footer_text">
          <div className="containerfooter">
            <div className="column">
              <h2>X</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="column">
            <h2><center>Contacts</center></h2>

            <div className="contact">
            <a href="https://www.instagram.com/cybersec.agency/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/IMG/insta.png`} alt="Instagram"/>
            </a>

            <a href="https://x.com/cyb_secu_agency" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/IMG/twitter.png`} alt="X" />
            </a>

            <a href="mailto:ynov.cybersecagency@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/IMG/mail.png`} alt="Mail" />
            </a>
            </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
