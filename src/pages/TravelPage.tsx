import { useState, useEffect } from 'react';
import './TravelPage.css';

function TravelPage() {
  const images = [
    { src: '/assets/lemur.jpg', alt: 'Lemur' },
    { src: '/assets/penguins.jpg', alt: 'Penguins' },
    { src: '/assets/giraffe.jpg', alt: 'Giraffe' },
  ];

  const travelPosts = [
    {
      title: 'Exploring Madagascar',
      description: 'A journey through the unique wildlife and landscapes of Madagascar.',
      image: '/assets/lemur.jpg',
    },
    {
      title: 'Antarctic Adventure',
      description: 'Witness the beauty of penguins and icy landscapes in Antarctica.',
      image: '/assets/penguins.jpg',
    },
    {
      title: 'Safari in Africa',
      description: 'An unforgettable experience with giraffes and other wildlife in Africa.',
      image: '/assets/giraffe.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="travel-page">
      <h1>Travel Memories</h1>
      <div className="carousel">
        <button className="prev-button" onClick={prevSlide}>
          &#10094; {/* Left arrow */}
        </button>
        <div className="carousel-content">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="carousel-image"
          />
          <div className="carousel-text">
          <h2 className="carousel-title">{travelPosts[currentIndex].title}</h2>
          <p className="carousel-description">{travelPosts[currentIndex].description}</p>
        </div>
        </div>
        <button className="next-button" onClick={nextSlide}>
          &#10095; {/* Right arrow */}
        </button>
      </div>
      <div className="carousel-dots">
        {travelPosts.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      </div>
      );
}

      export default TravelPage;
