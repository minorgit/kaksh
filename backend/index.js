require("dotenv").config(); // To load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ownerRoutes = require("./Routes/ownerRoutes.js"); // Routes for apartments

const app = express();
const PORT = process.env.PORT || 8080; // Use the port from .env or default to 8080

// Middleware
app.use(express.json()); // Middleware for parsing JSON
app.use(cors({ origin: "*" })); // Enable CORS for all origins

// Routes
app.use("/api/owner", ownerRoutes); // Mounting the owner routes under '/api/owner'

// MongoDB Connection
mongoose
  .connect(process.env.CONNECTION_STRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
