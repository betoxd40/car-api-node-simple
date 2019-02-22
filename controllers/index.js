const Car = require('../models/index');

// Handle index actions
exports.get = (req, res) => {
    Car.get((err, cars) => {
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

// Handle edit car
exports.put = async (req, res) => {
    const { id } = req.params;
    Car.findById(id, (err, car) => {
        if (err) {
            res.status(400)
                .json({
                    success: false,
                    message: err,
                });
        } else {
            for( let b in req.body ){
                car[b] = req.body[b];
            }
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

// Handle patch car
exports.patch = async (req, res) => {
    const { id } = req.params;
    Car.findById(id, (err, car) => {
        if (err) {
            res.status(400)
                .json({
                    success: false,
                    message: err,
                });
        } else {
            for( let b in req.body ){
                car[b] = req.body[b];
            }
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

// Handle delete car
exports.delete = async (req, res) => {
    const { id } = req.params;
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