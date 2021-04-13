const userController = require('../controllers/user.controller');
const verifyToken = require('../validation/verifyToken');
const router = require('express').Router();
const annonceController = require('../controllers/Annonce.controller');
const {upload} = require('../middleware/upload');

router.route('/').get(userController.getSeller)
router.route('/super-admin/login').post(userController.loginSuperAdmin)
router.route('/register').post(userController.register)
router.route('/login').post(userController.login)
router.route('/:id').get(userController.getUserById)
router.route('/validate/:id').patch(userController.validateAdmin)

router.route('/s-amin/annonces').get(annonceController.getAnnonces)
router.post('/s-amin/annonces/post', upload.single('image'), annonceController.saveAnnonce )
router.route('/s-amin/annonces/update/:id').patch(annonceController.updateAnnonce)
router.route('/s-amin/annonces/delete/id').delete(annonceController.deleteAnnonce)
router.route('/s-amin/annonces/:id').get(annonceController.getAnnonceById)



module.exports = router;