const mysql = require('mysql2/promise');

const connection = async() => await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asdasd',
    database: 'loan_management'
});

module.exports = connection;