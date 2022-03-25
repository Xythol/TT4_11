import './App.css';
import React, {Component} from 'react';
import Home from './components/homepage/home.js'
import Login from './components/homepage/login.js'
import GetLoan from './components/homepage/getLoan.js'
import PayLoan from './components/homepage/payLoan.js'
import Form from "./components/register/register.js"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends Component  {
  render() {
    return (
      // <Router>
      //   <div>
      //     {/* <Home /> */}
      //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //       <ul className="navbar-nav mr-auto">
      //         <li><Link to={'/'} className="nav-link"> Login </Link></li>
      //       </ul>
      //     </nav>

      //             <Routes>
      //               <Route path="/" exact component={Login} />
      //               <Route path="/home" component={Home} />
      //               <Route path="/register" component={Form} />
      //               <Route exact path="/login" component={Login} />
      //             </Routes>
                
      //         </div>
      // </Router>

      <div>
        {<Login />}
      </div>
      

    );
  }
}

export default App;
