const express = require("express");
const router = express.Router();
const {
  getApartments,
  addApartment,
  updateApartment,
  deleteApartment,
} = require("../Controller/ownerController.js");

// Fetch all apartments
router.get("/apartments", getApartments);

// Add a new apartment
router.post("/apartments", addApartment);  
// Update an apartment
router.put("/apartments/:id", updateApartment);

// Delete an apartment
router.delete("/apartments/:id", deleteApartment);

module.exports = router;
