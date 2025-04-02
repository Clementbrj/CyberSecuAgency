import React from "react";
import { useTranslation} from "react-i18next";

import Headers from "./header";
import Footer from "./footer";

// Mise en page de l'HTML 
function Expertise() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Header */}
      <Headers />

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
      <Footer />
    </main>
  );
}

export default Expertise;