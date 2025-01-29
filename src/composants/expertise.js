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
            <img src={`${process.env.PUBLIC_URL}/IMG/sensibilisation.png `} alt="Sensibilisation" height="204" width="220"/>
            <h3><strong>Sensibilisation</strong></h3>
            <p>La CyberSecurity Agency viens à vous. <br></br>
               Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br></br>
               <br></br>
              Voir le service</p>
          </li> 
        </ul>
        <ul className="columnbody">
          <li className ="columnbody">
            <img src={`${process.env.PUBLIC_URL}/IMG/sensibilisation.png `} alt="Sensibilisation" height="204" width="220"/>
            <h3><strong>Sensibilisation</strong></h3>
            <p>La CyberSecurity Agency viens à vous. <br></br>
               Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br></br>
               <br></br>
              Voir le service</p>
          </li> 
        </ul>
        <ul className="columnbody">
          <li className ="columnbody">
            <img src={`${process.env.PUBLIC_URL}/IMG/sensibilisation.png `} alt="Sensibilisation" height="204" width="220"/>
            <h3><strong>Sensibilisation</strong></h3>
            <p>La CyberSecurity Agency viens à vous. <br></br>
               Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br></br>
               <br></br>
              Voir le service</p>
          </li> 
        </ul>
        <ul className="columnbody">
          <li className ="columnbody">
            <img src={`${process.env.PUBLIC_URL}/IMG/sensibilisation.png `} alt="Sensibilisation" height="204" width="220"/>
            <h3><strong>Sensibilisation</strong></h3>
            <p>La CyberSecurity Agency viens à vous. <br></br>
               Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br></br>
               <br></br>
              Voir le service</p>
          </li> 
        </ul>
      </div>

      {/* 2EME étage */}
      <div className="column-align">
        <ul className="columnbody">
          <li className ="columnbody">
            <img src={`${process.env.PUBLIC_URL}/IMG/sensibilisation.png `} alt="Sensibilisation" height="204" width="220"/>
            <h3><strong>Sensibilisation</strong></h3>
            <p>La CyberSecurity Agency viens à vous. <br></br>
               Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br></br>
               <br></br>
              Voir le service</p>
          </li> 
        </ul>
        <ul className="columnbody">
          <li className ="columnbody">
            <img src={`${process.env.PUBLIC_URL}/IMG/sensibilisation.png `} alt="Sensibilisation" height="204" width="220"/>
            <h3><strong>Sensibilisation</strong></h3>
            <p>La CyberSecurity Agency viens à vous. <br></br>
               Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br></br>
               <br></br>
              Voir le service</p>
          </li> 
        </ul>
        <ul className="columnbody">
          <li className ="columnbody">
            <img src={`${process.env.PUBLIC_URL}/IMG/sensibilisation.png `} alt="Sensibilisation" height="204" width="220"/>
            <h3><strong>Sensibilisation</strong></h3>
            <p>La CyberSecurity Agency viens à vous. <br></br>
               Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br></br>
               <br></br>
              Voir le service</p>
          </li> 
        </ul>
        <ul className="columnbody">
          <li className ="columnbody">
            <img src={`${process.env.PUBLIC_URL}/IMG/sensibilisation.png `} alt="Sensibilisation" height="204" width="220"/>
            <h3><strong>Sensibilisation</strong></h3>
            <p>La CyberSecurity Agency viens à vous. <br></br>
               Viens à votre rencontre pour vous initier à la cybersécurité et ses bonnes pratiques.<br></br>
               <br></br>
              Voir le service</p>
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

export default Expertise;