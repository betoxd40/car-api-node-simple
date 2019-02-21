const Car = require('../models/index');

// Handle index actions
exports.index = (req, res) => {
    console.log('index');
    Car.get((err, cars) => {
        console.log(err, cars);
        if (err) {
            res.status(400)
                .json({
                    success: false,
                    message: err,
                });
        }
        res.status(200)
            .json({
                success: true,
                message: cars,
            });
    });
};

// Handle create order actions
exports.new = async (req, res) => {
    console.log('post')
    console.log('no llega aqui')
    const car = new Car();
    const {make, year, model, fuelType, trim, colors} = req.body;
    car.make = make;
    car.year = year;
    car.model = model;
    car.fuelType = fuelType;
    car.trim = trim;
    car.colors = colors;
    car.save(err => {
        if (err) {
            res.status(400)
                .json({
                    success: false,
                    message: err,
                });
        }
        res.status(200)
            .json({
                success: true,
            });
    });
};