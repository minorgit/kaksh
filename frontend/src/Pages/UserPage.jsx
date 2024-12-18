import {React,useState} from "react";
import Navbar from "../Components/Navbar";
import Filter from "../Components/Filter";
import Card from "../Components/card";
import Footer from "../Components/Footer";

const UserPage = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-transparent">
      <Filter setSelectedType={setSelectedType} setSelectedLocation={setSelectedLocation} />
      </div>
      <div className="m-1 p-4">
      <Card selectedType={selectedType} selectedLocation={selectedLocation} />
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
