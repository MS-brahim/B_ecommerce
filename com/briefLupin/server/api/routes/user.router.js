const userController = require('../controllers/user.controller');
const verifyToken = require('../validation/verifyToken');
const router = require('express').Router();

router.route('/').get(userController.getAdmins)
router.route('/log-sa').post(userController.loginSuperAdmin)
router.route('/register').post(userController.register)
router.route('/login').post(userController.login)
router.route('/:id').get(userController.getAdminById)
router.route('/validate/:id').patch(userController.validateAdmin)




module.exports = router;