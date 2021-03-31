const cardController = require('../controllers/card.controller');
const router = require('express').Router();

router.route('/:id').get(cardController.getCardById)
router.route('/save').post(cardController.saveCard)
router.route('/update/:id').get(cardController.updateCard)
router.route('/delete/:id').get(cardController.deleteCard)

module.exports = router;
