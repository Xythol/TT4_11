import axios from "axios";
import { useState } from 'react';

export default function Form() {

    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };

      const handleSubmit = (e) => {
     
          let data = {
            username: Name, 
            password: Password, 

          }; 
          console.log(data); 
          axios.post('http://localhost:8080/onboarding/login', data, { headers: { "Content-Type": "application/json" } })
          .then(res => {
            console.log(res); 
              if(res.data.status == "Success")
              { 
                console.log("Successfully login"); 
              }
          })
          .catch(err => {
              console.log(err)
              console.log(data)
          })
    
      };
        return (
            <div className="Login">
                <form>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"   onChange={handleName}  value={Name} className="form-control" placeholder="Email"
                             />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={handlePassword}  value={Password}  className="form-control" placeholder="Password"
                            />
                    </div>

                    <div className="form-group">
                        <label>{message}</label>
                    </div>


                    <button onClick={handleSubmit} className="btn btn-primary btn-block"> login</button>
                </form>
            </div>
        )
    }