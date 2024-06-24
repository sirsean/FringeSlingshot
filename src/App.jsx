import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Story from './components/Story';

const App = () => {
  return (
    <div className="phone-container">
      <div className="app full-height">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story/:storyId" element={<Story />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;