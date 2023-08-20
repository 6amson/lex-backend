const {Router} = require('express');
const authController = require('../controllers/authController')

const router = Router();

router.get('/query', authController.query_get);
router.post('/query', authController.query_post);

module.exports = router;