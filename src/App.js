import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EventPage from "./composants/event";

// Import des composants
import Acceuil from "./composants/acceuil";
import Documentation from "./composants/documentation";
import Expertise from "./composants/expertise";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Définition des routes */}
          <Route path="/" element={<Acceuil />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/services" element={<Expertise />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
