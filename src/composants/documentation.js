import React from "react";
import { Link } from "react-router-dom";
import { useTranslation} from "react-i18next";
function Documentation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <main>
      {/* Header */}
      <header>
        <nav className="header_navbar">
          <div className="h1_navbar">
            <h1><Link to="/">{t('welcome')}</Link></h1>
          </div>
          <section className="content_navbar">
            <Link to="/">{t('acc')}</Link>
            <Link to="/services">Documentation</Link>
            <Link to="/expertise">{t('expertise')}</Link>
          </section>
        </nav>
        <section className="circular-selector">
          <div className="segment" data-lang="EN" onClick={() => changeLanguage('en')}>EN</div>
          <div className="segment" data-lang="FR" onClick={() => changeLanguage('fr')}>FR</div>
          <div className="center"></div>
        </section>
      </header>

        {/* ---------------  */}
        <div className="Title-patern">
        <h3 className="Title">PRESENTATIONS</h3>
        </div>

        <div className="card-align">
        <ul className="card">
          <li className ="card">
            <h3><strong>{t('ppt1')}</strong></h3>
            <p>{t('ppc1')}</p>
            <a href="/CyberSecuAgency/PDF/Powerpoint-Debutant.pdf" download="Powerpoint Debutant.pdf"><img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png `} alt="Pp Débutant"/></a>
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
            <h3><strong>{t('ppt2')}</strong></h3>
            <p>{t('ppc2')}</p>
            <a href="/CyberSecuAgency/PDF/Guide OWASP.pdf" download="Guide OWASP.pdf"><img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png `} alt="Guide OWASP"/></a>
          </li> 
          </ul>
          {/* --- */}
            <ul className="card">
            <li className="card">
            <h3><strong>{t('ppt3')}</strong></h3>
            <p>{t('ppc3')}</p>
            <a href="/CyberSecuAgency/PDF/Guide sécurité site.pdf" download="Guide sécurité site.pdf"><img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png `} alt="Document OWASP"/></a>
            </li>
            </ul>
        {/* --- */}
        <ul className="card">
          <li className ="card">
            <h3><strong>{t('ppt4')}</strong></h3>
            <p>{t('ppc4')}</p>
            <a href="/CyberSecuAgency/PDF/Les-bases-cyber.pdf" download="Les bases en cybersécurité.pdf"><img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png `} alt="Bases utilisateurs en CyberSécurité"/></a>
          </li> 
        </ul>
        </div>
    
      {/* Footer */}
      <footer>
        <section className="footer">
          <div className="footer_contact">
            <h2>{t('contact')}</h2>
            <p>{t('email')}<a href="mailto:contact@cybersec.com">contact@cybersec.com</a></p>
            <p>{t('phone')}<a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
          </div>

          <div className="footer_social">
            <h2>{t('followUs')}</h2>
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
            <h2>{t('about')}</h2>
            <p>{t('aboutDescription')}</p>
          </div>
        </section>
        <div className="footer_privacy">
          <p>{t('privacy')}</p>
        </div>
      </footer>
    </main>
  );
}

export default Documentation;
