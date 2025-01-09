import React from "react";
import { Link } from "react-router-dom";
import "../styles/formsubmit.css"; 

//Fonction qui se déclenche au clic
function ButtonLink({ to, children }) {
    return <Link to={to}><button className="Bouton">{children}</button></Link>;
  }

function FormSubmit() {
    return (
        <div>
            <label className="Text">Formulaire envoyer avec succès !</label>
            <ButtonLink to="/">Retour à l'acceuil</ButtonLink> {/* Redirection au clic */}
        </div>
    );
}

export default FormSubmit; //Envoi du composant pour les routes
