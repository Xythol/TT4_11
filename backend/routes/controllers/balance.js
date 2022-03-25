const auth = require('../../utils/auth');
const connection = require('../../utils/connection');

const login = async (req, res, next) => {
    const CustomerId = auth.decode_jwt(req.headers.access_token)
    const con = await connection();
    
    const [rows, fields] = await con.execute('SELECT balance FROM customer WHERE CustomerId=?', [CustomerId]);
    if (rows.length > 0) {
      const balance = rows[0].balance;
        return res.status(200).json({balance: balance});
    }
}
module.exports = login;
