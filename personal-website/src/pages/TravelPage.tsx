import { useState, useEffect } from 'react';
import './TravelPage.css'; 

function TravelPage() {
  const images = [
    { src: '/assets/lemur.jpg', alt: 'Lemur' },
    { src: '/assets/penguins.jpg', alt: 'Penguins' },
    { src: '/assets/giraffe.jpg', alt: 'Giraffe' },
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
        <div className="carousel-image-container">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="carousel-image"
          />
        </div>
        <button className="next-button" onClick={nextSlide}>
          &#10095; {/* Right arrow */}
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
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
