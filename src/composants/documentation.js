import React from "react";
import { useTranslation } from "react-i18next";

import Headers from "./header";
import Footer from "./footer";

function Documentation() {
  const { t } = useTranslation();

  return (
    <main>
      <Headers />

      {/* Présentation */}
      <div className="Title-patern">
        <h3 className="Title">PRESENTATIONS</h3>
      </div>

      <div className="card-align">
        <ul className="card">
          <li className="card">
            <h3><strong>{t('ppt1')}</strong></h3>
            <p>{t('ppc1')}</p>
              <a href="/CyberSecuAgency/PDF/Powerpoint-Debutant.pdf" download="Powerpoint Debutant.pdf">
                <img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png`} alt="Pp Débutant" />
              </a>
          </li>
        </ul>
      </div>

      {/* Documentation */}
      <div className="Title-patern">
        <h3 className="Title">DOCUMENTATION</h3>
      </div>

      <div className="card-align">
        <ul className="card">
          {/* ---------- */}
          <li className="card">
            <h3><strong>{t('ppt2')}</strong></h3>
            <p>{t('ppc2')}</p>
            <a href="/CyberSecuAgency/PDF/Guide OWASP.pdf" download="Guide OWASP.pdf">
              <img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png`} alt="Guide OWASP"/>
            </a>
          </li>

          {/* ---------- */}
          <li className="card">
            <h3><strong>{t('ppt3')}</strong></h3>
            <p>{t('ppc3')}</p>
            <a href="/CyberSecuAgency/PDF/Guide sécurité site.pdf" download="Guide sécurité site.pdf">
              <img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png`} alt="Document sécurité site"/>
            </a>
          </li>

          {/* ---------- */}
          <li className="card">
            <h3><strong>{t('ppt4')}</strong></h3>
            <p>{t('ppc4')}</p>
            <a href="/CyberSecuAgency/PDF/Les-bases-cyber.pdf" download="Les bases en cybersécurité.pdf">
              <img src={`${process.env.PUBLIC_URL}/IMG/download/Download.png`} alt="Bases Cyber"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Pied de page */}
      <Footer />
    </main>
  );
}

export default Documentation;
