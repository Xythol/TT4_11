const express = require('express');
const router = express.Router();
const balance = require('../controllers/balance');
const auth = require("../../utils/auth")
const {log} = require("debug");

router.get('/', auth.auth_jwt, balance);

module.exports = router;