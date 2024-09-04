import React, { useState } from 'react';
import './Nature.css';

// Import images
import np1 from '../../assets/np1.jpg';
import np2 from '../../assets/np2.jpg';
import np3 from '../../assets/np3.jpg';
import np4 from '../../assets/np4.jpg';
import np5 from '../../assets/np5.jpg';
import np6 from '../../assets/np6.jpg';
import np7 from '../../assets/np7.jpg';
import np8 from '../../assets/np11.jpg';
import np9 from '../../assets/np12.jpg';

// Image data with updated photographer names
const images = [
  { id: 1, src: np1, photographer: 'John Doe', price: 100 },
  { id: 2, src: np2, photographer: 'Jane Smith', price: 150 },
  { id: 3, src: np3, photographer: 'Alex Johnson', price: 120 },
  { id: 4, src: np4, photographer: 'Emily Davis', price: 110 },
  { id: 5, src: np5, photographer: 'Michael Brown', price: 180 },
  { id: 6, src: np6, photographer: 'Olivia Wilson', price: 90 },
  { id: 7, src: np7, photographer: 'James Taylor', price: 130 },
  { id: 8, src: np8, photographer: 'Sophia Lee', price: 170 },
  { id: 9, src: np9, photographer: 'William Harris', price: 140 },
];

const Nature = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  // Function to open image in larger view
  const openImage = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="nature-gallery" id="nature">
      <h1 className="gallery-heading">Nature Photography</h1>
      <div className="card-grid">
        {images.map((image) => (
          <div className="card" key={image.id} onClick={() => openImage(image)}>
            <img src={image.src} alt="Nature" className="card-image" />
            <div className="card-info">
              <h3 className="photographer-name">{image.photographer}</h3>
              <p>Price: ${image.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying enlarged image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>&times;</button>
            <img src={selectedImage.src} alt="Enlarged" className="modal-image" />
            <div className="modal-info">
              <h3 className="photographer-name">{selectedImage.photographer}</h3>
              <p>Price: ${selectedImage.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nature;
