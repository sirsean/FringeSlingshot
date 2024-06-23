import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <h1>The Fringe: Slingshot</h1>
      <p>A bartender role-playing game</p>
      <p>Set in The Fringe universe</p>
      <ul>
        <li>
          <Link to="/story/chapter-one">Chapter One: The Beginning</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;