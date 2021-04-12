const productController = require('../controllers/product.controller');
const router = require('express').Router();
router.use(require('express').static('../uploads'));
const {uploadImage} = require('../middleware/upload');

router.route('/').get(productController.getProduct)
router.route('/:id').get(productController.getProductById)
router.route('/single/1').get(productController.getSingleProduct)
router.route('/save').post(uploadImage.array('image', 1), productController.saveProduct)
router.route('/update/:id').patch(productController.updateProduct)
router.route('/delete/:id').delete(productController.deleteProduct)

module.exports = router;
