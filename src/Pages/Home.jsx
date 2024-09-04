import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Collection from '../Components/Collection/Collection';
import About from '../Components/About/About';
import Footer from '../Components/Footer/Footer';

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
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      <Collection />
      <About />
      <Footer />
    </div>
  );
};

export default App;
