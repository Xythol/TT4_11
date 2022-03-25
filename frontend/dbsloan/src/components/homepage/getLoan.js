import { useState } from 'react';
import { Link } from 'react-router-dom';
 
export default function Form() {
 
  // States for registration
  const [Loan, setLoan] = useState('');
 
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
 
   // Handling the Loan change
   const handleLoan = (e) => {
    setLoan(e.target.value);
    setSubmitted(false);
  };
   
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Loan === '' ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      <Link to="/login" />
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1> ${Loan} has been successfully applied</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>Loan Application</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <div>
        <label className="label">Loan Amount</label>
        <input onChange={handleLoan} className="input"
          value={Loan} type="text" />
        </div>
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
