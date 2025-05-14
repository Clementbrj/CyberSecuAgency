import React from "react";
import { useTranslation } from "react-i18next";

import Headers from "./header";
import Footer from "./footer";

function Expertise() {
  const { t } = useTranslation();

  return (
    <main>
      <Headers />

      <section>
        <div className="card-align">
          <ul className="card">

            {/* ----- */}
            <li className="card">
              <img
                src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-debutant.png`}
                alt="Conseil débutant"
                height="204"
                width="220"
              />
              <h3><strong>{t("it1")}</strong></h3>
              <p>{t("ic1")}</p>
            </li>

            {/* ----- */}
            <li className="card">
              <img
                src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-intermediaire.png`}
                alt="Conseil intermédiaire"
                height="204"
                width="220"
              />
              <h3><strong>{t("it2")}</strong></h3>
              <p>{t("ic2")}</p>
            </li>

            {/* ----- */}
            <li className="card">
              <img
                src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-secu web.jpg`}
                alt="Conseil sécurité web"
                height="204"
                width="220"
              />
              <h3><strong>{t("it3")}</strong></h3>
              <p>{t("ic3")}</p>
            </li>

            {/* ----- */}
            <li className="card">
              <img
                src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-secu cyber.png`}
                alt="Conseil cybersécurité"
                height="204"
                width="220"
              />
              <h3><strong>{t("it4")}</strong></h3>
              <p>{t("ic4")}</p>
            </li>

            {/* ----- */}
            <li className="card">
              <img
                src={`${process.env.PUBLIC_URL}/IMG/expertise/csl-bdd.png`}
                alt="Conseil base de données"
                height="204"
                width="220"
              />
              <h3><strong>{t("it5")}</strong></h3>
              <p>{t("ic5")}</p>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Expertise;
