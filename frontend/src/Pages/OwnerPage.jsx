import React, { useState, useEffect } from "react";
import axios from "axios";
import OwnerNav from "../Components/OwnerNav";
import AddButton from "../Components/AddButton";
import Footer from "../Components/Footer";
import OwnerInfo from "../Components/OwnerInfo";
import OwnerForm from "../Components/OwnerForm"

const OwnerPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [apartments, setApartments] = useState([]);

  // Fetch apartments data from the backend
  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/owner/apartments");
        setApartments(response.data);
      } catch (error) {
        console.error("Error fetching apartments", error);
      }
    };

    fetchApartments();
  }, []);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <OwnerNav />
      <div className="flex-grow py-4 ml-12">
        <div className="w-full py-4">
          {/* Render the fetched apartments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {apartments.map((apartment) => (
              <OwnerInfo key={apartment._id} apartment={apartment} />
            ))}
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div>
        <AddButton toggleForm={toggleForm} />
      </div>

      {/* Footer */}
      <Footer />

      {/* Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <OwnerForm />
        </div>
      )}
    </div>
  );
};

export default OwnerPage;
