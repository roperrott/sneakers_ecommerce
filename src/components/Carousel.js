import React, { useState } from 'react';
import imageProductOne from '../assets/image-product-1.jpg';
import imageProductTwo from '../assets/image-product-2.jpg';
import imageProductThree from '../assets/image-product-3.jpg';
import imageProductFour from '../assets/image-product-4.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    imageProductOne,
    imageProductTwo,
    imageProductThree,
    imageProductFour
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full mt-16 mb-10">
        <div className="relative">
            <img src={images[currentIndex]} alt="carousel" className="w-fit h-96 object-cover rounded-xl shadow-lg" />
            <div className="absolute bottom-0 w-full flex items-center justify-center">
            {images.map((image, index) => (
                <div
                key={index}
                className={`h-2 w-2 rounded-full mx-2 cursor-pointer ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-500'}`}
                onClick={() => setCurrentIndex(index)}
                ></div>
            ))}
            </div>
        </div>
      <div className="mt-6 flex space-x-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="carousel"
            className={`h-20 w-20 object-cover rounded-lg shadow-lg cursor-pointer ${currentIndex === index ? 'border-2 border-orange-500' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;