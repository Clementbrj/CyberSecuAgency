import React, { useState } from "react";
import { EnvoiFormulaire } from "../Firebase/firebase-config"; // Import de Firebase
import { Link, useNavigate } from "react-router-dom"; // Import de Link pour Naviguer entre les routes
import "../styles/forms.css"; // Importer le fichier CSS

function Formulaire() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    need: "",
  });

  const [result, setResult] = useState(""); // Traitement de l'envoi
  const [Incomplet, setIncomplet] = useState(""); // Traitement du submit

  // Définition de la redirection après envoi à travers useNavigate de React-router-dom
  const navigate = useNavigate();

  // Fonction de transfert du formulaire à Firebase
  const Transfert = async (e) => {
    e.preventDefault(); // évite le comportement par défaut du composant, (rechargement de page pour un form)

    if (!formData.name.trim() || !formData.need.trim()) {
      setIncomplet("[!] Il manque des champs obligatoires");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // "Expression régulière" pour vérifier une chaîne de caractère"
                    //Début de la chaîne ^ - n'importe quel caractère  sauf @ et espace[^\s@] + n'
                    // n'importe quel caractère après @ - @[^\s@] + n'importe quel caractère après le .\.[^\s@]
    if (!formData.mail.trim() || !emailRegex.test(formData.mail)) {
      setIncomplet("[!] Le mail renseigné est invalide");
      return;
    }

    const payload = { name: formData.name, mail: formData.mail, need: formData.need }; // Crée un payload avec les valeurs
    const result = await EnvoiFormulaire(payload);

    // Réception de la réponse de firebase-config.js
    setResult(result);

    setIncomplet("");

    console.log(result);
    if (result) {
      // S'il y a un résultat
      navigate("/formsubmit");
    } 
  };

  // Fonction pour mettre à jour formData
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Récupère le nom et la valeur du champ
    setFormData({
      ...formData, // Copie l'ancien état
      [name]: value, // Met à jour uniquement le champ correspondant
    });
  };

  return (
    <div>
      <div className="header">
        <div className="header_texture"></div>
        <div className="header_text">
          <h1>CyberSecurity Agency</h1>
        </div>
        <div className="header_navbar">
          <div className="header_navbar--menu">
            <Link to="/" className="header_navbar--menu-link">Accueil</Link>
            <Link to="/services" className="header_navbar--menu-link">Services</Link>
            <Link to="/forms" className="header_navbar--menu-link">Formulaire</Link>
          </div>
        </div>
      </div>

      {/* Gestion des champs */}
      {Incomplet && <label className="AfficheErreur">{Incomplet}</label>}

      {/* Formulaire */}
      <form onSubmit={Transfert}>
        <input
          type="text"
          name="name" // Identifie le champ (important pour la gestion dynamique)   
          placeholder="Nom de votre Startup"
          value={formData.name}
          onChange={handleInputChange} // Utilise la fonction de mise à jour
        />
        <input
          type="text"
          name="mail" 
          placeholder="Votre mail"
          value={formData.mail}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="need" 
          placeholder="Comment pouvons-nous vous aider ?"
          value={formData.need}
          onChange={handleInputChange}
        />
        <button type="submit">Envoyer</button>

        {/* Label pour afficher result */}
        {result && <label className="AfficheSucces">{result}</label>}
      </form>
    </div>
  );
}

export default Formulaire;
