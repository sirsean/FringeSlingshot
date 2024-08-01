import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Encounter from './Encounter';
import { preloadImages } from '../util/ImagePreloader';
import AudioPlayer from '../util/AudioPlayer';

function storyImages(story) {
  const images = new Set();
  Object.values(story.encounters).forEach(encounter => {
    Object.values(encounter.screens).forEach(screen => {
      if (screen.background) {
        images.add(screen.background);
      }
      if (screen.bartop) {
        images.add(screen.bartop);
      }
      if (screen.character) {
        images.add(screen.character);
      }
    });
  });
  return Array.from(images);
}

const Story = () => {
  const { storyId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [story, setStory] = useState(null);
  const [currentEncounter, setCurrentEncounter] = useState(null);

  useEffect(() => {
    import(`../data/${storyId}.json`)
      .then(module => setStory(module.default))
      .catch(error => console.error(error));
  }, [storyId]);

  useEffect(() => {
    if (story) {
      setIsLoading(true);
      preloadImages(storyImages(story))
        .then(() => {
          setIsLoading(false);
          setCurrentEncounter(story.startEncounter);
        });
    }
  }, [story]);

  
  const handleEncounterChange = (nextEncounterId) => {
    setCurrentEncounter(nextEncounterId);
  }
  
  if (!story || isLoading) {
    return (
      <div className="Loading">
        <div><img src="/img/loading/loading.gif" alt="Loading" className="loading-gif" /></div>
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="Story">
      <Encounter
        story={story}
        encounterId={currentEncounter}
        handleEncounterChange={handleEncounterChange}
        />
      {story.audio && <AudioPlayer src={story.audio} />}
    </div>
  );
};

export default Story;