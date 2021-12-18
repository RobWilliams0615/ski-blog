const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Trail = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    area: { type: String, required: true },
    difficulty: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('trails', Trail);
