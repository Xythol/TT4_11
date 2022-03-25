var express = require('express');
var router = express.Router();
var controller = require('../controllers/onboarding_controller');

router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;