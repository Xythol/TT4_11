const auth = require('../../utils/auth');
const connection = require('../../utils/connection');

const login = async (req, res, next) => {
    const {cust_id} = auth.decode_jwt(req.headers.access_token) 
    
    const con = await connection();

    const [___, _] = await con.execute('INSERT INTO `loan` (`loan_amount`) VALUES (?)', {cust_id});
    
    const {loan_amount} = req.body
    const [rowsv2, __] = await con.execute('INSERT INTO `customerloan` (`CustomerId`, `LoanId`) VALUES (?)', {loan_amount});
    if (rowsv2.length > 0) {
      return res.status(200).json();

    }
}
module.exports = login;
