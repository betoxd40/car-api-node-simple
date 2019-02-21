const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    make: String,
    year: Number,
    model: String,
    fuelType: String,
    trim: String,
    colors: String,
});

const Car = module.exports = mongoose.model('order', carSchema);
module.exports.get = (callback, limit) => {
    Car.find(callback).limit(limit);
};