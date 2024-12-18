import React, { useState } from "react";

const Filter = ({ setSelectedType, setSelectedLocation }) => {
  const [selectedButton, setSelectedButton] = useState(""); // Track selected apartment type
  const [selectedLocation, setSelectedLocationState] = useState(""); // Track selected location

  const handleTypeClick = (type) => {
    setSelectedButton(type);
    setSelectedType(type);  // Update the apartment type filter
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocationState(location);
    setSelectedLocation(location);  // Update the location filter
  };

  
  const locations = [
    "Shree Nagar", 
    "Mangal Nagar", 
    "Vikram Nagar", 
    "Kshipra Road", 
    "Gurukul Road"
  ];

  return (
    <div className="flex justify-around items-center p-4">
      <button
        className={`text-gray-900 py-2 px-6 text-lg rounded-md bg-gray-200 border border-gray-200 transition-all duration-300 shadow-md hover:bg-gray-300 active:shadow-inner active:bg-gray-400 ${selectedButton === "Single Room" ? "bg-gray-500 text-white" : ""}`}
        onClick={() => handleTypeClick("Single Room")}
      >
        Single Room
      </button>
      <button
        className={`text-gray-900 py-2 w-36 px-6 text-lg rounded-md bg-gray-200 border border-gray-200 transition-all duration-300 shadow-md hover:bg-gray-300 active:shadow-inner active:bg-gray-400 ${selectedButton === "1BHK" ? "bg-gray-500 text-white" : ""}`}
        onClick={() => handleTypeClick("1BHK")}
      >
        1BHK
      </button>
      <select
        className="bg-white text-gray-700 font-semibold py-2 px-6 text-lg rounded border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none"
        onChange={handleLocationChange}
        value={selectedLocation}
      >
        <option value="">Select Location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
      <button
        className={`text-gray-900 py-2 px-6 w-36 text-lg rounded-md bg-gray-200 border border-gray-200 transition-all duration-300 shadow-md hover:bg-gray-300 active:shadow-inner active:bg-gray-400 ${selectedButton === "2BHK" ? "bg-gray-500 text-white" : ""}`}
        onClick={() => handleTypeClick("2BHK")}
      >
        2BHK
      </button>
      <button
        className={`text-gray-900 py-2 px-6 w-36 text-lg rounded-md bg-gray-200 border border-gray-200 transition-all duration-300 shadow-md hover:bg-gray-300 active:shadow-inner active:bg-gray-400 ${selectedButton === "3BHK" ? "bg-gray-500 text-white" : ""}`}
        onClick={() => handleTypeClick("3BHK")}
      >  
        3BHK
      </button>
      <button
        className={`text-gray-900 py-2 px-6 w-36 text-lg rounded-md bg-gray-200 border border-gray-200 transition-all duration-300 shadow-md hover:bg-gray-300 active:shadow-inner active:bg-gray-400 ${selectedButton === "4BHK" ? "bg-gray-500 text-white" : ""}`}
        onClick={() => handleTypeClick("4BHK")}
      >
        4BHK
      </button>
    </div>
  );
};

export default Filter;
