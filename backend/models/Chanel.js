const mongoose = require('mongoose');

const chanelSchema = mongoose.Schema({
    name : { type: String, required: true },
    description: { type: String, required: true },
    createur: { type: String, required: true },
    users : { type: Array, required: true },
    nbr_msg_unread : { type: Number, required: true },
});

module.exports = mongoose.model('Chanel', chanelSchema);