const categoryController = require('../controllers/category.controller');
const router = require('express').Router();
const {uploadImage} = require('../middleware/upload');

// CATEGORY 
router.route('/').get(categoryController.getCategory);
router.route('/:id').get(categoryController.getCategoryById);
router.route('/save', uploadImage.array('image', 1)).post(categoryController.saveCategory);
router.route('/update/:id').patch(categoryController.updateCategory);
router.route('/delete/:id').delete(categoryController.deleteCategory);

module.exports = router;