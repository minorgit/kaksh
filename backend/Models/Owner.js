const mongoose = require('mongoose'); 

const apartmentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true, 
  },
  location: {
    type: String,
    required: true, // Location of the apartment
  },
  price: {
    type: Number,
    required: true, // Apartment price
  },
  description: {
    type: String,
    required: true, // Apartment description
  },
  address: {
    type: String,
    required: true, 
  },
  contact: {
    type: String,
    required: true, 
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v); 
      },
      message: (props) => `${props.value} is not a valid contact number!`,
    },
  },
  availabilityStatus: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now, 
  },
});

module.exports = mongoose.model('Apartment', apartmentSchema);
