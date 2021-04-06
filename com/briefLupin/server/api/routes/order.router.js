const orderController = require('../controllers/order.controller');
const router = require('express').Router();

router.route('/:id').get(orderController.getOrderById)
router.route('/').get(orderController.getOrders)
router.route('/save').post(orderController.saveOrder)

module.exports = router;