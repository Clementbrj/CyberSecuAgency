import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des composants
import Acceuil from "./composants/acceuil";
import Documentation from "./composants/documentation";
import Expertise from "./composants/expertise";

function App() {
  return (
    <Router basename="/CyberSecuAgency">
      <div>
        <Routes>
          {/* Définition des routes */}
          <Route path="/" element={<Acceuil />} />
          <Route path="/services" element={<Documentation />} />
          <Route path="/expertise" element={<Expertise />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
