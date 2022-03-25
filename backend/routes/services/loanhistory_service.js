const express = require('express');
const router = express.Router();
const auth = require('../../utils/auth');
const loanhistory_service = require('../controllers/loanhistory_controller');
const {log} = require("debug");

router.get('/', auth.auth_jwt, loanhistory_service);

module.exports = router;