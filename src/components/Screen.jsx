import React, { useEffect, useState } from 'react';

const Screen = ({ story, screen, onChoice }) => {
  const [showTapToAdvance, setShowTapToAdvance] = useState(false);

  useEffect(() => {
    setShowTapToAdvance(false);
    if (screen.fullScreenClick) {
      const timer = setTimeout(() => {
        setShowTapToAdvance(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [screen.fullScreenClick]);
  
  let screenClass = ["Screen"];
  if (screen.characterInFront) {
    screenClass.push("characterInFront");
  }
  const onFullScreenClick = (e) => {
    e.preventDefault();
    if (screen.fullScreenClick) {
      onChoice({ 
        screenId: screen.fullScreenClick.nextScreen,
        encounterId: screen.fullScreenClick.nextEncounter,
      });
    }
  }
  return (
    <div className={screenClass.join(" ")} onClick={onFullScreenClick}>
      <img src={screen.background} alt="background" className="background" />
      {showTapToAdvance && <div className="tapToAdvance"><div className="text">Tap to continue...</div></div>}
      {story.foreground && <img src={story.foreground} alt="foreground" className="storyForeground" />}
      {screen.bartop && <img src={screen.bartop} alt="bartop" className="bartop" />}
      {screen.middleground && <img src={screen.middleground} alt="middleground" className="middleground" />}
      {screen.character && <img src={screen.character} alt="character" className="character" />}
      <div className="foreground">
        {screen.text && 
          <div className="text">
            <div className="letters" style={{"fontFamily": screen.fontFamily || "ibm-plex-mono, sans-serif"}}>
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
        {(!screen.choices || screen.choices.length === 0) &&
          <div className="noChoices"></div>}
      </div>
    </div>
  );
};

export default Screen;