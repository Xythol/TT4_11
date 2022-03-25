const crypto = require("crypto")
const connection = require('../../utils/connection');
const auth = require('../../utils/auth');

const loanpay = async(req, res, next) => {

    try {
        const {cust_id} = auth.decode_jwt(req.headers.access_token);
        
        var con = await connection()

        let loan_id = req.body.loan_id
        let payment_amount = req.body.payment_amount

        // First, check if amount being paid is more than the loan amount
        var sql = "SELECT loan_amount FROM loan WHERE LoanId = ?"
        const [rows, fields] = await con.execute(sql, [loan_id])

        // Check if loan exists
        if (rows == 0) {
            res.status(400).json({err_message: 'Loan id not found.'})
        }
        else {
            // Check if loan amount is less than the pay_amount
            let loan_amount = rows[0].loan_amount
            if (payment_amount > loan_amount) {
                res.status(400).json({err_message: 'Payment amount entered is more than the loan amount.'})
            }
            else {
                // Create new entry in payment table
                sql = "INSERT INTO payment(LoanId, payment_date, payment_amount) VALUES (?, ?, ?)"
                let payment_date = (new Date()).toISOString().split('T')[0];
                await con.execute(sql, [loan_id, payment_date, payment_amount])

                // Deduct amount from the loan using loan ID
                sql = "UPDATE loan SET loan_amount = ? WHERE LoanId = ?"
                await con.execute(sql, [loan_amount - payment_amount, loan_id])

                // Get the balance of the customer
                sql = "SELECT balance FROM customer WHERE CustomerId = ?"
                const [customer_row, customer_fields] = await con.execute(sql, [cust_id])
                let balance = customer_row[0].balance

                // Update the balance of the customer
                sql = "UPDATE customer SET balance = ? WHERE CustomerId = ?"
                await con.execute(sql, [balance - payment_amount, cust_id])

                res.sendStatus(200)
            }
        }
    }
    catch (error) {
        res.status(400).json({err_message: 'Error thrown within loanpay of loanpayment_controller.js'})
    }
}

module.exports.loanpay = loanpay