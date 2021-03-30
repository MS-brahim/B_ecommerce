const productController = require('../controllers/product.controller');
const router = require('express').Router();

router.route('/').get(productController.getProduct)
router.route('/save').post(productController.saveProduct)
router.route('/:id').get(productController.getProductById)
router.route('/update/:id').get(productController.updateProduct)
router.route('/delete/:id').get(productController.deleteProduct)

module.exports = router;