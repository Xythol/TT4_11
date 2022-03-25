const crypto = require("crypto")
const connection = require('../../utils/connection');
const auth = require('../../utils/auth');

const register = async(req, res, next) => {

    var con = await connection()

    let username = req.body.username
    let password = req.body.password
    let name = req.body.name
    let phone = req.body.phone
    let address = req.body.address

    let salt = crypto.randomBytes(16).toString('hex')
    let password_salt = password + salt
    let hashedps = crypto.createHash('sha256').update(password_salt).digest('hex')

    // Check if username already exist
    const [rows, fields] = await con.execute('SELECT CustomerUsername FROM customerlogin WHERE CustomerUsername=?', [username]);

    try {
        if (rows.length == 0) {
            // Insert customer details into customer table
            result = await con.execute('INSERT INTO customer(customer_name, customer_phone, customer_address, balance) VALUES (?, ?, ?, ?)', [name, phone, address, 0])
    
            // Insert customer login details into customerlogin
            await con.execute('INSERT INTO customerlogin(CustomerId, CustomerUsername, CustomerPasswordHashed, Salt) VALUES (?, ?, ?, ?)', [result[0].insertId, username, hashedps, salt])
    
            res.sendStatus(200)
        }
        else {
            res.status(400).json({err_message: 'Username already exist.'})
        }
    }
    catch (error) {
        res.status(400).json({err_message: 'Error when running sql statement in register function in onboarding_controller.js'})
    }
}

const login = async (req, res, next) => {
    const user = req.body.username;
    const pass = req.body.password;
    const con = await connection();

    try {
        const [rows, fields] = await con.execute('SELECT CustomerUsername,CustomerPasswordHashed,Salt,CustomerId FROM customerlogin WHERE CustomerUsername=?', [user]);
        if (rows.length > 0) {
            const salt = rows[0].Salt;
            const password_salt = pass + salt;
            const hashedps = crypto.createHash('sha256').update(password_salt).digest('hex');
            if (hashedps === rows[0].CustomerPasswordHashed) {
                const jwt = auth.encode_jwt({cust_id: rows[0].CustomerId});
                return res.status(200).json({access_token: jwt});
            } else {
                return res.status(401).json({error: "Unauthorised"});
            }
        } else {
            return res.status(401).json({error: "Unauthorised"});
        }
    }
    catch (error) {
        res.status(400).json({err_message: 'Error when running sql statement in login function in onboarding_controller.js'})
    }
    
}

module.exports.login = login;
module.exports.register = register;
