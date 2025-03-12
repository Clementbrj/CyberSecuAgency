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
    
    
    
    </div>
    );
}

export default Documentation;
