import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <img src="/img/home-page/Slingshot_Logo_AltJuicebox_Transp.png" alt="Logo" style={{ width: '100%', height: 'auto' }} />
      <div className="chapters">
        <button onClick={() => navigate("/story/chapter-one")}>Volatile Mix</button>
      </div>
    </div>
  );
}

export default Home;