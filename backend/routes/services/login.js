const express = require('express');
const router = express.Router();
const login = require('../controllers/login');
const {log} = require("debug");

router.post('/', login);

module.exports = router;