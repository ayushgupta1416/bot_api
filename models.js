const mongoose = require('mongoose')

const trainDetailsSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departure_date: {
        type: String,
        required: true
    },
    price: {
        type: Object,
        required: true
    },
    img_url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('trainDetails',trainDetailsSchema);