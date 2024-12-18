import React, { useState } from 'react';
import axios from 'axios';

const OwnerForm = ({ closeForm }) => {
  // States to store form data
  const [apartmentType, setApartmentType] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState('');

  // Handle change for each input field
  const handleApartmentTypeChange = (e) => setApartmentType(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handleAvailabilityStatusChange = (e) => setAvailabilityStatus(e.target.value);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const apartmentData = {
      type: apartmentType,
      location: location,
      price: price,
      description: description,
      address: address,
      contact: contact,
      availabilityStatus: availabilityStatus,
    };

    try {
      // Sending data to the backend (API)
      const response = await axios.post('http://localhost:8080/api/owner/apartments', apartmentData, {
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
      });

      console.log('Apartment added:', response.data);

      // Clear form after submission
      setApartmentType('');
      setLocation('');
      setPrice('');
      setDescription('');
      setAddress('');
      setContact('');
      setAvailabilityStatus('');

      // Close form after submission (optional)
      closeForm();
    } catch (err) {
      console.error('Error adding apartment:', err);
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-14 h-14 rounded-full bg-yellow-400 flex justify-center items-center cursor-pointer z-10">
        <button
          className="text-white text-3xl font-bold transition-colors duration-300 hover:text-gray-300"
          onClick={closeForm}
        >
          &times;
        </button>
      </div>

      <form
        className="flex flex-col gap-4 p-7 w-[600px] rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-300 transition duration-300 hover:from-yellow-300 hover:to-yellow-400"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-3xl font-extrabold text-white mb-6">
          List Your Apartment
        </h2>

        {/* Apartment Type & Location */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="text-[#151717] font-semibold" htmlFor="apartmentType">
              Apartment Type
            </label>
            <select
              id="apartmentType"
              value={apartmentType}
              onChange={handleApartmentTypeChange}
              className="w-full p-2.5 rounded-full border-2 border-[#ecedec] focus:outline-none"
            >
              <option value="">Select Apartment Type</option>
              <option value="single-room">Single Room</option>
              <option value="1bhk">1BHK</option>
              <option value="2bhk">2BHK</option>
              <option value="3bhk">3BHK</option>
              <option value="4bhk">4BHK</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="text-[#151717] font-semibold" htmlFor="location">
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter location"
              className="w-full p-2.5 rounded-full border-2 border-[#ecedec] focus:outline-none"
            />
          </div>
        </div>

        {/* Address & Contact */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="text-[#151717] font-semibold" htmlFor="address">
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter address"
              className="w-full p-2.5 rounded-full border-2 border-[#ecedec] focus:outline-none"
            />
          </div>

          <div className="flex-1">
            <label className="text-[#151717] font-semibold" htmlFor="contact">
              Contact:
            </label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={handleContactChange}
              placeholder="Enter contact number"
              className="w-full p-2.5 rounded-full border-2 border-[#ecedec] focus:outline-none"
            />
          </div>
        </div>

        {/* Price & Availability */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="text-[#151717] font-semibold" htmlFor="price">
              Price:
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              placeholder="Enter price"
              className="w-full p-2.5 rounded-full border-2 border-[#ecedec] focus:outline-none"
            />
          </div>

          <div className="flex-1">
            <label className="text-[#151717] font-semibold" htmlFor="availabilityStatus">
              Availability Status:
            </label>
            <select
              id="availabilityStatus"
              value={availabilityStatus}
              onChange={handleAvailabilityStatusChange}
              className="w-full p-2.5 rounded-full border-2 border-[#ecedec] focus:outline-none"
            >
              <option value="">Select Apartment Status</option>
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="text-[#151717] font-semibold" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter description"
            className="w-full p-2.5 rounded-lg border-2 border-[#ecedec] focus:outline-none"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-[50px] rounded-full bg-transparent border-2 border-white text-white font-medium text-[15px] shadow-[inset_0_0_0_0_yellow] transition-all duration-500 hover:shadow-[inset_0_-100px_0_0_yellow] active:scale-90"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default OwnerForm;
