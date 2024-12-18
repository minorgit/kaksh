import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Photo1 from "../assets/Photo1.jpeg";

import Photo2 from "../assets/Photo2.jpeg";
import Photo3 from "../assets/Photo3.jpeg";
import {
  LocationMarkerIcon,
  CashIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  PencilIcon,
  CheckIcon,
  XIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

const OwnerInfoPage = ({ onClose, apartment }) => {
  const { apartmentType, location, price, availabilityStatus, description, contact } = apartment;

  // Static image URLs (same for all apartments)
  const images = [
    { url: Photo1 },
    { url: Photo2 },
    { url: Photo3 },
  ];

  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [isEditingAvailability, setIsEditingAvailability] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const [editedPrice, setEditedPrice] = useState(price);
  const [editedAvailabilityStatus, setEditedAvailabilityStatus] = useState(availabilityStatus);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSaveChanges = () => {
    // Assuming updateApartmentData function is passed from the parent component
    setIsEditingPrice(false);
    setIsEditingAvailability(false);
    setIsEditingDescription(false);
  };

  const handleCancelChanges = () => {
    setEditedPrice(price);
    setEditedAvailabilityStatus(availabilityStatus);
    setEditedDescription(description);
    setIsEditingPrice(false);
    setIsEditingAvailability(false);
    setIsEditingDescription(false);
  };

  return (
    <div className="w-[800px] relative flex flex-col gap-3 bg-white rounded-lg shadow-xl">
      <button
        onClick={onClose}
        className="absolute top-0 right-0 text-3xl text-[#393736] hover:text-red-600 transition duration-200"
      >
        &times;
      </button>

      {/* Header Section */}
      <div className="p-4 rounded-md bg-gradient-to-b from-yellow-300 to-yellow-100 shadow-lg">
        <h1 className="font-bold text-[#393736] text-2xl tracking-tight mb-4 text-center">
          Apartment Information
        </h1>
      </div>

      {/* Image Slider Section */}
      <div className="w-full ml-1 rounded-lg overflow-hidden shadow-lg">
        <SimpleImageSlider
          width={792}
          height={350}
          images={images}  // Using static image URLs
          showBullets={true}
          showNavs={true}
          style={{ borderRadius: "15px" }}
        />
      </div>

      {/* Apartment Details */}
      <div className="space-y-4 p-4 ml-3">
        {/* Apartment Type and Location */}
        <div className="flex gap-32">
          <div className="flex items-center gap-2">
            <InformationCircleIcon className="w-6 h-6 text-yellow-500" />
            <p className="font-semibold text-[#393736] text-lg">
              <strong>Apartment Type:</strong> {apartmentType}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LocationMarkerIcon className="w-6 h-6 text-blue-500" />
            <p className="font-semibold text-[#393736] text-lg">
              <strong>Location:</strong> {location}
            </p>
          </div>
        </div>

        {/* Editable Price and Availability Status */}
        <div className="flex gap-12">
          <div className="flex items-center gap-2">
            <CashIcon className="w-6 h-6 text-green-500" />
            <div className="flex items-center w-full">
              <p className="font-semibold text-[#393736] text-lg">
                <strong>Price:</strong>
              </p>
              {isEditingPrice ? (
                <div className="flex items-center w-full">
                  <input
                    type="number"
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                    className="border rounded p-2 ml-2 w-16"
                  />
                  <CheckIcon
                    onClick={handleSaveChanges}
                    className="w-6 h-6 text-green-500 cursor-pointer ml-2"
                  />
                  <XIcon
                    onClick={handleCancelChanges}
                    className="w-6 h-6 text-red-500 cursor-pointer ml-2"
                  />
                </div>
              ) : (
                <div className="flex items-center w-full">
                  <span className="ml-2">{price}</span>
                  <PencilIcon
                    onClick={() => setIsEditingPrice(true)}
                    className="w-6 h-6 text-gray-500 cursor-pointer ml-auto"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-6 h-6 text-teal-500" />
            <div className="flex items-center w-full">
              <p className="font-semibold text-[#393736] text-lg">
                <strong>Availability:</strong>
              </p>
              {isEditingAvailability ? (
                <div className="flex items-center w-full">
                  <select
                    value={editedAvailabilityStatus}
                    onChange={(e) => setEditedAvailabilityStatus(e.target.value)}
                    className="border rounded p-2 ml-2 w-full"
                  >
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                  <CheckIcon
                    onClick={handleSaveChanges}
                    className="w-6 h-6 text-green-500 cursor-pointer ml-2"
                  />
                  <XIcon
                    onClick={handleCancelChanges}
                    className="w-6 h-6 text-red-500 cursor-pointer ml-2"
                  />
                </div>
              ) : (
                <div className="flex items-center w-full">
                  <span className="ml-2">{availabilityStatus}</span>
                  <PencilIcon
                    onClick={() => setIsEditingAvailability(true)}
                    className="w-6 h-6 text-gray-500 cursor-pointer ml-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Editable Description */}
        <div className="flex items-center gap-2">
          <InformationCircleIcon className="w-6 h-6 text-gray-500" />
          <div className="flex items-center w-full">
            <p className="font-semibold text-[#393736] text-lg">
              <strong>Description:</strong>
            </p>
            {isEditingDescription ? (
              <div className="flex items-center w-full">
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="border rounded p-2 ml-2 w-full"
                  rows="2"
                />
                <CheckIcon
                  onClick={handleSaveChanges}
                  className="w-6 h-6 text-green-500 cursor-pointer ml-2"
                />
                <XIcon
                  onClick={handleCancelChanges}
                  className="w-6 h-6 text-red-500 cursor-pointer ml-2"
                />
              </div>
            ) : (
              <div className="w-full">
                <span>{description}</span>
                <PencilIcon
                  onClick={() => setIsEditingDescription(true)}
                  className="w-6 h-6 text-gray-500 cursor-pointer ml-auto"
                />
              </div>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-2">
          <PhoneIcon className="w-6 h-6 text-blue-500" />
          <p className="font-semibold text-[#393736] text-lg">
            <strong>Contact:</strong> {contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerInfoPage;
