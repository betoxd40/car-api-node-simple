const Car = require('../models/index');

// Handle index actions
exports.get = (req, res) => {
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

// Handle create car
exports.post = async (req, res) => {
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

// Handle create car
exports.put = async (req, res) => {
    const { id, make, year, model, fuelType, trim, colors } = req.body;
    Car.findById(id, (err, car) => {
        if (err) {
            res.status(400)
                .json({
                    success: false,
                    message: err,
                });
        } else {
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
        }     
    });
};

// Handle create car
exports.delete = async (req, res) => {
    const { id } = req.body;
    Car.findById(id, (err, car) => {
        if (err) {
            res.status(400)
                .json({
                    success: false,
                    message: err,
                });
        } else {
            car.remove(err => {
                if (err) {
                    res.status(400)
                        .json({
                            success: false,
                            message: err,
                        });
                }
                else {
                    res.status(200)
                        .json({
                            success: true,
                        });
                }
            })
        }
    });
};