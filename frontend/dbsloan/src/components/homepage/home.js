import { Component } from "react";
import './home.css';
// import { Link } from "react-router-dom"
import axios from "axios";

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "user",
            balance: 4000
        }
    }

    applyLoan = (e) => {
        // console.log("clicked"); 
        // call getLoan.js
   }

   componentDidMount() {
       // call api to get all data 
       axios.get('http://localhost:8080/loanhistory/')
            .then(response => {
               console.log(response); 
            })

            .catch(function (error) {
                console.log(error)
            })
   }

    render() {
        return (
            <div className="Home">
               <div className="container">
                   <div className="welcomeMessage">
                        <p>Welcome back {this.state.name}</p> 
                   </div>
                   <div>
                       <div className="container-inline">
                          <p>Your current balance is: {this.state.balance}</p>
                          {/* <Link to={'/Login'}> <button className="applyButton" onClick={this.applyLoan()} type="button">Apply Loan</button></Link> */}
                          <button className="applyButton" onClick={this.applyLoan()} type="button">Apply Loan</button>
                       </div>
                   </div>


                    <div id="Current">
                    <table>
                        <tr>
                            <th>Loan ID</th>
                            <th>Loan Amount</th>
                            <th>Actions</th>
                        </tr>
                        {/* <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                            <td>Austria</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td>Laughing Bacchus Winecellars</td>
                            <td>Yoshi Tannamuri</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                            <td>Italy</td>
                        </tr> */}
                        </table>
                    </div>

                    <div id="History">
                    <table>
                        <tr>
                            <th>Loan ID</th>
                            <th>Loan Amount</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                        </tr>
                        <tr>
                            <td>Laughing Bacchus Winecellars</td>
                            <td>Yoshi Tannamuri</td>
                        </tr>
                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                        </tr>
                        </table>
                    </div>
                </div> 
            </div>
        )
    }
    
}


