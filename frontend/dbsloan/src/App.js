import './App.css';
import React, {Component} from 'react';
import Home from './components/homepage/home.js'
import Login from './components/homepage/login.js'
import Form from "./components/register/register.js"

class App extends Component  {
  render() {
    return (
      <div>
        <Form />

      </div>
      
    );
  }
}

export default App;
