const productController = require('../controllers/product.controller');
const router = require('express').Router();

router.route('/').get(productController.getProduct)
router.route('/:id').get(productController.getProductById)
router.route('/1/h').get(productController.getProduct1)
router.route('/save').post(productController.saveProduct)
router.route('/update/:id').patch(productController.updateProduct)
router.route('/delete/:id').delete(productController.deleteProduct)

module.exports = router;
