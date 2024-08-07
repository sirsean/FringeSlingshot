import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <img
        src="/img/home-page/ss1.png"
        style={{ width: '100%', height: 'auto' }}
        onClick={() => navigate('/story/chapter-one')}
        />
    </div>
  );
}

export default Home;