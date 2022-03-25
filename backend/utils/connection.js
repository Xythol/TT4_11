const mysql = require('mysql2/promise');

const connection = async() => await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'paultho',
    database: 'loan_management'
});

module.exports = connection;