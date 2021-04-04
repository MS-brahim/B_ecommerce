const cartController = require('../controllers/cart.controller');
const router = require('express').Router();

router.route('/:id').get(cartController.getCartById)
router.route('/').get(cartController.getCart)
router.route('/save').post(cartController.saveCart)
router.route('/update/:id').patch(cartController.updateCart)
router.route('/delete/:id').delete(cartController.deleteCart)

module.exports = router;
