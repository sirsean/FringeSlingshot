import './App.css'
import React, { useState } from 'react';
import Encounter from './components/Encounter';

const App = () => {
  const [currentEncounter, setCurrentEncounter] = useState('home-page');
  const handleEncounterChange = (nextEncounterId) => {
    setCurrentEncounter(nextEncounterId);
  }
  return (
    <div className="App">
      <Encounter
        encounterId={currentEncounter}
        handleEncounterChange={handleEncounterChange}
        />
    </div>
  );
};

export default App;