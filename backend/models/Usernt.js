const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const usernSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pseudo: { type: String, required: true },
  createdChanels: { Array: String, required: true },
  hisChanels: { type: Array, required: true },
});

usernSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Usern', usernSchema);