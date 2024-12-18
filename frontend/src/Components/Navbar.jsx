import React from "react";
import NavImg from '../assets/Nav.jpeg';

const Navbar = () => {
  return (
    <nav
      className="relative h-96"
      style={{ 
        backgroundImage: `url(${NavImg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between h-full">
        
        {/* Login & Signup Buttons at the top right */}
        <div className="flex justify-end p-4 space-x-3">
          <a
            href="#"
            className="px-6 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300">
              Login
          </a>
          <a
            href="#"
            className="px-6 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Signup
          </a>
        </div>

        {/* Center Heading and Slogan */}
        <div className="flex flex-col justify-center items-center flex-1">
          <h1 className="text-white text-4xl font-extrabold mb-2 text-center">
            KAKSH
            <span className="block text-xl font-semibold italic mt-1">
              A perfect stay starts with Kaksh
            </span>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
