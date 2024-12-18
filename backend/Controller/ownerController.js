const Apartment = require("../Models/Owner.js"); // Your model file

// Fetch all apartments
const getApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.status(200).json(apartments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new apartment (no image handling in schema anymore)
const addApartment = async (req, res) => {
  try {
    const apartmentData = req.body; // Assuming req.body has all necessary fields (type, location, price, etc.)

    const apartment = new Apartment(apartmentData);
    await apartment.save();
    res.status(201).json({ message: "Apartment added successfully!", apartment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an apartment
const updateApartment = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedApartment = await Apartment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedApartment) return res.status(404).json({ message: "Apartment not found!" });
    res.status(200).json({ message: "Apartment updated successfully!", updatedApartment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an apartment
const deleteApartment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedApartment = await Apartment.findByIdAndDelete(id);
    if (!deletedApartment) return res.status(404).json({ message: "Apartment not found!" });
    res.status(200).json({ message: "Apartment deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getApartments, addApartment, updateApartment, deleteApartment };
