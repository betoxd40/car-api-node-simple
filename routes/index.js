
const carController = require('../controllers/index');

let router = require('express').Router();

// Order routes
router.route('/')
    .get(carController.index)
    .post(carController.new);

module.exports = router;