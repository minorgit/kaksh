import React, { useState } from "react";
import Photos from "./photos"; // Assuming you have a Photos component for modal
import Photo1 from '../assets/Photo1.jpeg';
import Photo2 from '../assets/Photo2.jpeg';
import Photo3 from '../assets/Photo3.jpeg';
import Photo4 from '../assets/Photo4.jpeg';

const Card = ({ selectedType, selectedLocation }) => {
  const apartments = [
    { 
      type: "1BHK", 
      location: "Shree Nagar", 
      price: "$1200/month", 
      description: "A cozy 1BHK apartment in the heart of Ujjain.", 
      address: "House No. 12, Shree Nagar, Ujjain, MP", 
      contact: "+91 9876543210",
      imageUrls: [
        Photo1,
        Photo2,
        Photo3
      ]
    },
    { 
      type: "2BHK", 
      location: "Shree Nagar", 
      price: "$2200/month", 
      description: "A spacious 2BHK apartment with a modern layout.", 
      address: "House No. 5, Shree Nagar, Ujjain, MP", 
      contact: "+91 9876543211",
      imageUrls: [
        Photo2,
        Photo1,
        Photo4
      ]
    },
    { 
      type: "3BHK", 
      location: "Shree Nagar", 
      price: "$3500/month", 
      description: "A luxurious 3BHK apartment with a stunning view.", 
      address: "House No. 22, Shree Nagar, Ujjain, MP", 
      contact: "+91 9876543212",
      imageUrls: [
        Photo3,
        Photo2,
        Photo4
      ]
    },
    { 
      type: "2BHK", 
      location: "Shree Nagar", 
      price: "$2500/month", 
      description: "Spacious 2BHK with modern fittings.", 
      address: "House No. 30, Shree Nagar, Ujjain, MP", 
      contact: "+91 9876543213",
      imageUrls: [
        Photo4,
        Photo2,
        Photo1
      ]
    },
    { 
      type: "1BHK", 
      location: "Mangal Nagar", 
      price: "$1200/month", 
      description: "Affordable 1BHK in Mangal Nagar.", 
      address: "House No. 10, Mangal Nagar, Ujjain, MP", 
      contact: "+91 9876543214",
      imageUrls: [
        Photo2,
        Photo1,
        Photo4
      ]
    },
    { 
      type: "2BHK", 
      location: "Mangal Nagar", 
      price: "$2200/month", 
      description: "A 2BHK with modern interiors.", 
      address: "House No. 20, Mangal Nagar, Ujjain, MP", 
      contact: "+91 9876543215",
      imageUrls: [
        Photo3,
        Photo1,
        Photo4
      ]
    },
    { 
      type: "3BHK", 
      location: "Mangal Nagar", 
      price: "$3500/month", 
      description: "3BHK with excellent amenities.", 
      address: "House No. 35, Mangal Nagar, Ujjain, MP", 
      contact: "+91 9876543216",
      imageUrls: [
        Photo4,
        Photo1,
        Photo3
      ]
    },
    { 
      type: "2BHK", 
      location: "Vikram Nagar", 
      price: "$2200/month", 
      description: "2BHK in a peaceful residential area.", 
      address: "House No. 18, Vikram Nagar, Ujjain, MP", 
      contact: "+91 9876543217",
      imageUrls: [
        Photo1,
        "https://via.placeholder.com/150?text=2BHK+Vikram1",
        "https://via.placeholder.com/150?text=2BHK+Vikram2"
      ]
    },
    { 
      type: "3BHK", 
      location: "Vikram Nagar", 
      price: "$3000/month", 
      description: "A luxurious 3BHK with all amenities.", 
      address: "House No. 50, Vikram Nagar, Ujjain, MP", 
      contact: "+91 9876543218",
      imageUrls: [
        Photo4,
        "https://via.placeholder.com/150?text=3BHK+Vikram1",
        "https://via.placeholder.com/150?text=3BHK+Vikram2"
      ]
    },
    { 
      type: "1BHK", 
      location: "Vikram Nagar", 
      price: "$1300/month", 
      description: "A lovely 1BHK with modern amenities.", 
      address: "House No. 5, Vikram Nagar, Ujjain, MP", 
      contact: "+91 9876543219",
      imageUrls: [
        Photo1,
        "https://via.placeholder.com/150?text=1BHK+Vikram1",
        "https://via.placeholder.com/150?text=1BHK+Vikram2"
      ]
    },
    { 
      type: "4BHK", 
      location: "Vikram Nagar", 
      price: "$4000/month", 
      description: "Spacious 4BHK with a garden.", 
      address: "House No. 75, Vikram Nagar, Ujjain, MP", 
      contact: "+91 9876543220",
      imageUrls: [
        Photo3,
        "https://via.placeholder.com/150?text=4BHK+Vikram2",
        "https://via.placeholder.com/150?text=4BHK+Vikram3"
      ]
    },
    { 
      type: "2BHK", 
      location: "Kshipra Road", 
      price: "$2500/month", 
      description: "A modern 2BHK with great connectivity.", 
      address: "House No. 7, Kshipra Road, Ujjain, MP", 
      contact: "+91 9876543221",
      imageUrls: [
        Photo2,
        Photo1,
        Photo4
      ]
    },
    { 
      type: "3BHK", 
      location: "Kshipra Road", 
      price: "$3000/month", 
      description: "3BHK with a stunning view of the river.", 
      address: "House No. 3, Kshipra Road, Ujjain, MP", 
      contact: "+91 9876543222",
      imageUrls: [
        Photo2,
        Photo4,
        Photo1
      ]
    },
    { 
      type: "1BHK", 
      location: "Gurukul Road", 
      price: "$1400/month", 
      description: "Affordable 1BHK apartment.", 
      address: "House No. 14, Gurukul Road, Ujjain, MP", 
      contact: "+91 9876543223",
      imageUrls: [
        Photo3,
        Photo4,
        Photo1
      ]
    },{ 
      type: "Single Room", 
      location: "Shree Nagar", 
      price: "$1200/month", 
      description: "A cozy 1BHK apartment in the heart of Ujjain.", 
      address: "House No. 12, Shree Nagar, Ujjain, MP", 
      contact: "+91 9876543210",
      imageUrls: [
        Photo1,
        Photo2,
        Photo3
      ]
    },
  ];

  const filteredApartments = apartments.filter((apartment) => {
    const matchesType = selectedType ? apartment.type === selectedType : true;
    const matchesLocation = selectedLocation ? apartment.location.includes(selectedLocation) : true;
    return matchesType && matchesLocation;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(null);

  const openModal = (apartment) => {
    setSelectedApartment(apartment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApartment(null);
  };

  return (
    <>
      {filteredApartments.map((apartment, index) => (
        <div key={index} className="flex flex-col h-52 items-center bg-stone-100 border border-gray-200 rounded-lg shadow md:flex-row hover:bg-stone-200 m-1">
          <img
            className="object-cover w-full h-48 rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg cursor-pointer ml-2"
            src={apartment.imageUrls[0]} 
            alt={`${apartment.type} Apartment`}
            onClick={() => openModal(apartment)} 
          />
          <div className="flex flex-col justify-between p-4 leading-normal w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {apartment.type}
            </h5>
            <p className="mb-4 text-gray-700">
              <strong>Location:</strong> {apartment.location} <br />
              <strong>Price:</strong> {apartment.price} <br />
              <strong>Available:</strong> Yes <br />
              <strong>Contact:</strong> {apartment.contact} <br />
              <strong>Address:</strong> {apartment.address} <br />
              <strong>Description:</strong> {apartment.description}
            </p>
          </div>
        </div>
      ))}

      {/* Modal for viewing more images */}
      {isModalOpen && selectedApartment && (
        <Photos images={selectedApartment.imageUrls} closeModal={closeModal}  />
      )}
    </>
  );
};

export default Card;
