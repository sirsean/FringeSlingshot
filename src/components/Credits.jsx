import React from 'react';
import { useNavigate } from 'react-router-dom';

function Credits() {
  const navigate = useNavigate();
  return (
    <div className="Credits Page">
      <span></span>
      <button className="bottom-button" onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default Credits;