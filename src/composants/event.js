import React from "react";
import { useTranslation } from 'react-i18next';

import Headers from "./header";
import Footer from "./footer";
import "../styles/event.css";

function EventPage() {
  const { t } = useTranslation();
  
  return (
    <main>
      {/* Header */}
        <Headers/>

    <div className="event-gallery">
      <div className="event-card">
        <img src={`${process.env.PUBLIC_URL}/IMG/event/event1.jpg`} alt="Intervention en cybersécurité" />
        <p className="event-caption">{t('ie1')}</p>
    </div>

    <div className="event-card">
      <img src={`${process.env.PUBLIC_URL}/IMG/event/event2.png`} alt="Atelier pratique" />
      <p className="event-caption">{t('ie2')}</p>
    </div>

  {/* D'autres images ici */}
</div>


    {/* Footer */}
      <Footer />
    </main>
  );
}

export default EventPage;
