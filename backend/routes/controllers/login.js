const auth = require('../../utils/auth');
const connection = require('../../utils/connection');

const login = async (req, res, next) => {
    const user = req.body.username;
    const pass = req.body.password;
    const con = await connection();

    const [rows, fields] = await con.execute('SELECT CustomerUsername,CustomerPasswordHashed,Salt,CustomerId FROM customerlogin WHERE CustomerUsername=?', [user]);
    if (rows.length > 0) {
        const salt = rows[0].Salt;
        if (pass === rows[0].CustomerPasswordHashed) {
            const jwt = auth.encode_jwt(rows[0].CustomerId);
            return res.status(200).json({access_token: jwt});
        } else {
            return res.status(401).json({error: "Unauthorised"});
        }
    } else {
        return res.status(401).json({error: "Unauthorised"});
    }
}

module.exports = login;
