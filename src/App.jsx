import React, { useState, useEffect } from 'react';
import Home from './Pages/Home'; // Ensure this file exists in src/Pages
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WildlifePage from './Pages/WildlifePage';
import CitiesPage from './Pages/CitiesPage';
import PortraitsPage from './Pages/PortraitsPage';
import NaturePage from './Pages/NaturePage';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
    <Routes>
      
        

    <Route path = '/' element={<Home/>}/>
    <Route path = '/WildlifePage' element={<WildlifePage/>}/>
    <Route path="/CitiesPage" element={<CitiesPage />} />
    <Route path="/PortraitsPage" element={<PortraitsPage />} />
    <Route path="/NaturePage" element={<NaturePage />} />
    </Routes>
    </div>
  );
};

export default App;
