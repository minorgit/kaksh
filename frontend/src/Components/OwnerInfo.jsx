import React, { useState } from "react";
import OwnerInfoPage from "../Components/OwnerInfoPage";

const OwnerInfo = ({ apartment }) => {
  const [showOwnerInfoPage, setShowOwnerInfoPage] = useState(false);

  const handleClose = () => {
    setShowOwnerInfoPage(false);
  };

  return (
    <div className="relative">
      {/* Display apartment card with information */}
      <div
        onClick={() => setShowOwnerInfoPage(true)}
        className="w-[300px] h-[200px] relative p-6 bg-gradient-to-b from-[#FFF7B1] to-[#FFFFFF] rounded-[23px] shadow-[0px_155px_62px_rgba(0,0,0,0.01),0px_87px_52px_rgba(0,0,0,0.05),0px_39px_39px_rgba(0,0,0,0.09),0px_10px_21px_rgba(0,0,0,0.1),0px_0px_0px_rgba(0,0,0,0.1)] transition-transform duration-800 ease-[cubic-bezier(0.15,0.83,0.66,1)]"
      >
        <div className="flex flex-col justify-center items-center h-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#574D33CC]">
            {apartment.apartmentType}
          </h5>
          <p className="text-lg text-[#574D33CC]">{apartment.location}</p>
        </div>
      </div>

      {/* Show OwnerInfoPage Modal */}
      {showOwnerInfoPage && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <OwnerInfoPage
            onClose={handleClose}
            apartment={apartment} // Pass the apartment data to the modal
          />
        </div>
      )}
    </div>
  );
};

export default OwnerInfo;
