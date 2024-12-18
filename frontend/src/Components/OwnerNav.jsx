import React, { useState } from "react";
import Room from "../assets/Room.jpeg";

const OwnerNav = () => {
  return (
    <div className="relative h-96">
      <nav
        className="relative h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${Room})`,
        }}
      >
        <div className="flex justify-between items-center h-full bg-black bg-opacity-50 p-4">
          <div className="flex flex-col justify-center items-center flex-1">
            <h1 className="text-white text-4xl font-extrabold mb-2 text-center">
              KAKSH
              <span className="block text-xl font-semibold italic mt-1">
                A perfect stay starts with Kaksh
              </span>
            </h1>
          </div>

          {/* Login & Signup buttons */}
          <div className="absolute top-4 right-4 flex space-x-4">
            <button className="px-6 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300">
              Login
            </button>
            <button className="px-6 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default OwnerNav;
