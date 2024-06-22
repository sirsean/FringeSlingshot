import React, { useState } from 'react';
import Screen from './Screen';
import encounters from '../data/encounters.json';

const Encounter = ({ encounterId, handleEncounterChange }) => {
  const encounter = encounters.encounters[encounterId];
  const [currentScreen, setCurrentScreen] = useState(encounter.screens[encounter.startScreen]);
  if (!currentScreen) {
    setCurrentScreen(encounter.screens[encounter.startScreen]);
  }
  

  const handleChoice = ({ screenId, encounterId }) => {
    if (encounterId) {
      setCurrentScreen(null);
      handleEncounterChange(encounterId);
    } else if (screenId) {
      setCurrentScreen(encounter.screens[screenId]);
    }
  };

  if (!currentScreen) {
    return null;
  }
  return (
    <div className={encounterId}>
      <Screen screen={currentScreen} onChoice={handleChoice} />
    </div>
    );
};

export default Encounter;