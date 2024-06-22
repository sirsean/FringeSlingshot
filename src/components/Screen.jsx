import React from 'react';

const Screen = ({ screen, onChoice }) => {
  return (
    <div className="screen">
      <img src={screen.background} alt="background" className="background" />
      {screen.bartop && <img src={screen.bartop} alt="bartop" className="bartop" />}
      {screen.character && <img src={screen.character} alt="character" className="character" />}
      {screen.text && 
        <div className="text">
          <div className="letters" style={{"fontFamily": screen.fontFamily || "gt-pressura, sans-serif"}}>
            {screen.text}
          </div>
        </div>}
      {screen.choices &&
        <div className="choices">
          {screen.choices.map((choice, index) => (
            <button key={index} onClick={() => onChoice({
              screenId: choice.nextScreen,
              encounterId: choice.nextEncounter,
            })}>
              {choice.text}
            </button>
          ))}
        </div>}
    </div>
  );
};

export default Screen;