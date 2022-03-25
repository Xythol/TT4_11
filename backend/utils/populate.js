var express = require('express');
var router = express.Router();
const crypto = require("crypto")
const connection = require('./connection');

router.put('/', async (req, res, next) => {
    const con = await connection();
    const {username, password, id} = req.body;
    let salt = crypto.randomBytes(16).toString('hex');
    let password_salt = password + salt;
    let hashedps = crypto.createHash('sha256').update(password_salt).digest('hex');
    await con.execute('INSERT INTO customerlogin(CustomerId, CustomerUsername, CustomerPasswordHashed, Salt) VALUES (?, ?, ?, ?)', [id, username, hashedps, salt])

    res.sendStatus(200);
});

module.exports = router;