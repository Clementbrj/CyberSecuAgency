import React from "react";
import { Link } from "react-router-dom";
import { useTranslation} from "react-i18next";

// Mise en page de l'HTML 
function Expertise() {
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

      {/* 1ER étage de compétences */}
    <section>
        <div className="column-align">
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-debutant.png `} alt="Conseil débutant" height="204" width="220"/>
              <h3><strong>{t("it1")}</strong></h3>
              <p>{t("ic1")}</p>
            </li> 
          </ul>
          {/* --- */}
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-intermediaire.png `} alt="Conseil intermediaire" height="204" width="220"/>
              <h3><strong>{t("it2")}</strong></h3>
              <p>{t("ic2")}</p>
            </li> 
          </ul>
          {/* --- */}
          </div>
          <div className="column-align">
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-secu web.jpg `} alt="Conseil sécu web" height="204" width="220"/>
              <h3><strong>{t("it3")}</strong></h3>
              <p>{t("ic3")}</p>
            </li> 
          </ul>
          {/* --- */}
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-secu cyber.png `} alt="Conseil sécu cyber" height="204" width="220"/>
              <h3><strong>{t("it4")}</strong></h3>
              <p>{t("ic4")}</p>
            </li> 
          </ul>


        {/* 2EME étage */}
          <ul className="columnbody">
            <li className ="columnbody">
              <img src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-bdd.png `} alt="Conseil bdd" height="204" width="220"/>
              <h3><strong>{t("it5")}</strong></h3>
              <p>{t("ic5")}</p>
            </li> 
          </ul>
        </div>
    </section>

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

export default Expertise;