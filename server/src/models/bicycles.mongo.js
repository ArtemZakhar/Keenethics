const mongoose = require('mongoose');

const bicyclesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  wheel_size: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  description: String,
  status: String,
});

module.exports = mongoose.model('Bicycle', bicyclesSchema);
