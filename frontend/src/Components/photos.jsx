import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Photos = ({ images, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative p-5 rounded-lg max-w-4xl w-full">
        
        <button
          className="absolute top-4 right-0 text-gray-300 text-4xl bg-transparent border-none p-2 rounded-full hover:text-white transition-all duration-300"
          onClick={closeModal}
        >
          &times;
        </button>

        <div className="slide-container mx-auto max-w-4xl mt-10">
          <Slide>
            {images.map((slideImage, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-center bg-cover h-[500px]"
                  style={{ backgroundImage: `url(${slideImage})` }} 
                >
                  {/* Optionally, you can display a caption here */}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Photos;

