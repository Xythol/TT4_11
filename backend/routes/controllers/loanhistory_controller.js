const auth = require('../../utils/auth');
const connection = require('../../utils/connection');

const loanhistory_controller = async (req, res, next) => {
    const {cust_id} = auth.decode_jwt(req.headers.access_token);
    const sql = "SELECT customerloan.CustomerId,Loan.LoanId,Loan.loan_amount FROM customer NATURAL JOIN customerloan NATURAL JOIN loan WHERE customer.CustomerId=?";
    const con = await connection();

    const [rows, fields] = await con.execute(sql, [cust_id]);
    res.status(200).json(rows);

}

module.exports = loanhistory_controller;