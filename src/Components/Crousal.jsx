import React, { useState, useEffect } from 'react';

const images = [
  "https://i.gadgets360cdn.com/large/amazon-main-banner-1200x675_1696706103200.jpg",
  "https://blog.creatopy.com/wp-content/uploads/2016/06/Facebook-Carousel-Ads-examples.png",
  "https://www.nataconnexindo.com/content.images/content/1/1903",
];

function Crousal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full  transition-all duration-700 ease-in-out"
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-10"></div>

      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-75 z-20"
      >
        ‹
      </button>
      <button
        onClick={() =>
          setCurrentIndex((currentIndex + 1) % images.length)
        }
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-75 z-20"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Crousal;
