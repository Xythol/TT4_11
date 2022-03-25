const auth = require('../../utils/auth');
const connection = require('../../utils/connection');

const login = async (req, res, next) => {
    const {cust_id} = auth.decode_jwt(req.headers.access_token) 
    
    const con = await connection();

    const [rows, fields] = await con.execute('INSERT INTO `loan` (`loan_amount`)', {cust_id});
    if (rows.length > 0) {
      
      return res.status(200).json({balance: balance}}
    const {loan_amount} = req.body
    const [rows, fields] = await con.execute('INSERT INTO `customerloan` (`CustomerId`, `LoanId`)', {loan_amount});
    if (rows.length > 0) {
      const balance = rows[0].balance;
        return res.status(200).json({balance: balance});

        
        
    }
}
module.exports = login;
