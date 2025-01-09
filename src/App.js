import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des composants 
import Acceuil from "./composants/acceuil";
import Services from "./composants/services";
import Formulaire from "./composants/forms";
import FormSubmit from "./composants/formsubmit";
import Auth from "./composants/connexion";

function App() {
  return (
    <Router>
      <div>
        <Routes>
        {/* Définition des routes */}
          <Route path="/" element={<Acceuil/>}/> 
          <Route path="/services" element={<Services/>}/>
          <Route path="/forms" element={<Formulaire/>}></Route>
          <Route path="/formsubmit" element={<FormSubmit/>}></Route>
          <Route path="/Auth" element={<Auth/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
