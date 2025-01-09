import { initializeApp } from "firebase/app"; //Initialiser l'API Firebase
import { getFirestore, collection, addDoc } from "firebase/firestore"; //Rajouter les services Firebase
import { getAuth } from "firebase/auth";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDyaWoLgwrGjygu6LUx1d8ZR_OmZUN1cwA",
  authDomain: "ydays-68e11.firebaseapp.com",
  projectId: "ydays-68e11",
  storageBucket: "ydays-68e11.firebasestorage.app",
  messagingSenderId: "468622295539",
  appId: "1:468622295539:web:2e3fcfe713e6c4a4415286",
  measurementId: "G-74CNP2ZFWE"
};

// Initialiser services/Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
// Fonction pour ajouter les résultats du formulaire à Firestore
export const EnvoiFormulaire = async (payload) => {
  try {
    // Ajouter les données dans la collection "formulaires"
    const docRef = await addDoc(collection(db, "formulaire"), payload); //Ici await permet d'attendre la fin de la création du form

    console.log("Document écrit avec ID: ", docRef.id);
    return "Formulaire envoyer avec succès";
  } catch (e) {
    console.error("Erreur d'ajout du document: ", e);
    return "Erreur lors de l'envoi du formulaire";
  }
};

export {auth};