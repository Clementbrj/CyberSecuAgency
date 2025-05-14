import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Headers(){
    const { t, i18n } = useTranslation();
    
    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    };
return(
    <header>
        <nav className="header_navbar">
          <div className="h1_navbar">
            <h1><Link to="/">{t('welcome')}</Link></h1>
          </div>
          <section className="content_navbar">
            <Link to="/">{t('acc')}</Link>
            <Link to="/services">{t('Services')}</Link>
            <Link to="/documentation">Ressources</Link>
          </section>
        </nav>
        <section className="circular-selector">
          <div className="segment" data-lang="EN" onClick={() => changeLanguage('en')}>EN</div>
          <div className="segment" data-lang="FR" onClick={() => changeLanguage('fr')}>FR</div>
          <div className="center"></div>
        </section>
    </header>
    )
}