import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home Page">
      <button className="center-button" onClick={() => navigate('/story/chapter-one')}>Press to Start</button>
      <button className="bottom-button" onClick={() => navigate('/credits')}>Credits</button>
    </div>
  );
}

export default Home;