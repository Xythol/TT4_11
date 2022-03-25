const express = require('express');
const router = express.Router();
const auth = require('../../utils/auth');
const loanhistory = require('../controllers/loanhistory');
const {log} = require("debug");

router.get('/', auth.auth_jwt, loanhistory);

module.exports = router;