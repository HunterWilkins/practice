import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AnimalContext from "./utils/AnimalContext";
import Animal from "./components/Animal";
import "./App.css";

function App() {
  document.title = "Context Test";
  const [animalState, setAnimalState] = useState({
    animal: "",
    feline: false,
    roar: false
  });

  return (
    <Router>
      <div>
       
        <AnimalContext.Provider value = {animalState}>
          <Route exact path="/" component={Animal} />
        </AnimalContext.Provider>
      </div>
    </Router>
  );
}

export default App;
