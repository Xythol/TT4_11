var express = require('express');
var router = express.Router();
var controller = require('../controllers/loanpayment_controller');
const auth = require('../../utils/auth');

router.post('/pay', auth.auth_jwt, controller.loanpay);

module.exports = router;