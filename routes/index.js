
const carController = require('../controllers/index');

let router = require('express').Router();

// Order routes
router.route('/')
    .get(carController.get)
    .post(carController.post);

router.route('/:id')
    .put(carController.put)
    .delete(carController.delete);

module.exports = router;