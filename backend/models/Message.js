
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    body : { type: String, required: true },
    users : { type: String, required: true },
    chanel : { type: String, required: true },
    date_et_heure : { type: String, required: true },
    isRead : { type: String, required: true }

});

module.exports = mongoose.model('Message', messageSchema);