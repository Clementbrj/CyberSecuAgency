import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import "../styles/card.css";
import "../styles/template.css";
import "../styles/documentation.css";
import "../styles/quisommesnous.css";

import Headers from "./header";
import Footer from "./footer";

function Acceuil() {
  const { t } = useTranslation();
  
  return (
    <main>
      {/* Header */}
        <Headers/>
      {/* Middle Section: Company Presentation */}
      <section className="company-presentation">
        <div className="presentation-content">
          <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/logo.png`} alt="logoSU" />
          <p>{t('company1')}</p>
          <h2>{t("companyt2")}</h2>
          <p>{t('company2')}</p>
          <h2>{t('companyt3')}</h2>
          <p>{t('company3')}</p>
            <div className="company-container">

              {/* scroll bar */}
              <div className="scroll-container">
                <div className="scroll-content">
                  <Link to="/services" className="service-card">
                    <p>{t('companys1')}</p>
                  </Link>
                  <Link to="/services" className="service-card">
                    <p>{t('companys2')}</p>
                  </Link>
                  <Link to="/services" className="service-card">
                    <p>{t('companys3')}</p>
                  </Link>
                </div>
              </div>
              
            </div>
        </div>  
      </section>

    {/* Footer */}
      <Footer />
    </main>
  );
}

export default Acceuil;
