import React, { useState } from 'react';
import './Wildlife.css';

// Import images
import wp1 from '../../assets/wp1.jpg';
import wp2 from '../../assets/wp2.jpg';
import wp3 from '../../assets/wp3.jpg';
import wp4 from '../../assets/wp4.jpg';
import wp5 from '../../assets/wp5.jpg';
import wp6 from '../../assets/wp6.jpg';
import wp7 from '../../assets/wp7.jpg';
import wp8 from '../../assets/wp8.jpg';
import wp9 from '../../assets/wp9.jpg';

// Image data with updated photographer names
const images = [
  { id: 1, src: wp1, photographer: 'John Doe', price: 100 },
  { id: 2, src: wp2, photographer: 'Jane Smith', price: 150 },
  { id: 3, src: wp3, photographer: 'Alex Johnson', price: 120 },
  { id: 4, src: wp4, photographer: 'Emily Davis', price: 110 },
  { id: 5, src: wp5, photographer: 'Michael Brown', price: 180 },
  { id: 6, src: wp6, photographer: 'Olivia Wilson', price: 90 },
  { id: 7, src: wp7, photographer: 'James Taylor', price: 130 },
  { id: 8, src: wp8, photographer: 'Sophia Lee', price: 170 },
  { id: 9, src: wp9, photographer: 'William Harris', price: 140 },
];

const Wildlife = () => {
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
    <div className="wildlife-gallery" id="wildlife">
      <h1 className="gallery-heading">Wildlife Photography</h1>
      <div className="card-grid">
        {images.map((image) => (
          <div className="card" key={image.id} onClick={() => openImage(image)}>
            <img src={image.src} alt="Wildlife" className="card-image" />
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

export default Wildlife;
