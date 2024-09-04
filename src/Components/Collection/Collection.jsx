import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Collection.css';

// Import video files
import animals from '../../assets/animals.mp4';
import city from '../../assets/city.mp4';
import portrait from '../../assets/portrait.mp4';
import landscape from '../../assets/landscape.mp4';

// Define video data with page names
const videoData = [
  { page: 'WildlifePage', title: 'Wildlife', videoSrc: animals },
  { page: 'CitiesPage', title: 'Cities', videoSrc: city },
  { page: 'PortraitsPage', title: 'Portraits', videoSrc: portrait },
  { page: 'NaturePage', title: 'Nature', videoSrc: landscape },
];

const Collection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (page) => {
    // Navigate to the corresponding page based on the page name
    navigate(`/${page}`);
  };

  return (
    <section id="collection" className="collection-container">
      <h2 className="collection-heading" data-aos="fade-up">Our Collection</h2>
      <div className="video-grid">
        {videoData.map((video) => (
          <div
            key={video.page}
            className="video-section"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <video autoPlay loop muted className="video-element">
              <source src={video.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <h3 className="video-title">{video.title}</h3>
              <button
                onClick={() => handleClick(video.page)}
                className="collection-button"
              >
                See Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
