import React, { useEffect, useRef } from 'react';

const AudioComponent = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={src} type="audio/mp3" />
    </audio>
  );
};

export default AudioComponent;