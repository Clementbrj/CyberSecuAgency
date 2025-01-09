// Import des essentiels de react
import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";


// Crée un "root" avec la nouvelle API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
