import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Form() {
 
  // States for registration
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Repassword, setRePassword] = useState('');

 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
   // Handling the Phone change
   const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };
   // Handling the Address change
   const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
    // Handling the repassword change
    const handleRePassword = (e) => {
      setRePassword(e.target.value);
      setSubmitted(false);
    };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name === '' || Phone === '' || Address === ''||
     Email === ''|| Password === ''|| Repassword === '') {
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
        <h1>User {Name} successfully registered!!</h1>
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
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <div>
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={Name} type="text" />
        </div>
        <div>
        <label className="label">Phone</label>
        <input onChange={handlePhone} className="input"
          value={Phone} type="Phone" />
        </div>
        <div>
        <label className="label">Address</label>
        <input onChange={handleAddress} className="input"
          value={Address} type="Address" />
        </div>
        <div>
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={Email} type="Email" />
        </div>
        <div>
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={Password} type="password" />
        </div>
        <div>
        <label className="label">Confirm Password</label>
        <input onChange={handleRePassword} className="input"
          value={Repassword} type="password" />
        </div>
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}