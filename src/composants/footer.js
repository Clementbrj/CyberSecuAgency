import React from "react";
import { useTranslation } from 'react-i18next';

export default function Footer(){
    const { t } = useTranslation();

    return(
        <footer>
        <section className="footer">
        <div className="footer_contact">
            <h2>{t('contact')}</h2>
            <p>{t('email')}<a href="mailto:contact@cybersec.com">contact@cybersec.com</a></p>
            <p>{t('phone')}<a href="tel:+33123456789">+33.x.xx.xx.xx.xx</a></p>
        </div>

        <div className="footer_social">
            <h2>{t('followUs')}</h2>
            <div className="social_links">
            <a href="https://www.instagram.com/cybersec.agency/" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/insta.png`} alt="Instagram" />
            </a>
            <a href="https://x.com/cyb_secu_agency" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/IMG/acceuil/twitter.png`} alt="Twitter" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
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
    )
}