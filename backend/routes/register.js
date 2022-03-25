var express = require('express');
var router = express.Router();
const connection = require('../utils/connection');


/* GET users listing. */
router.post('/', async function(req, res, next) {
    let user_name = req.body.username;
    let passw = req.body.password;

    const con = await connection();

    await con.execute('INSERT INTO test_table(username, password) VALUES (?, ?)', [user_name, passw]);

});

module.exports = router;