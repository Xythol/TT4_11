import axios from "axios";
import { Component } from "react";

export default class login extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="Login">
                <form>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email"
                             />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                            />
                    </div>

                    <button className="btn btn-primary btn-block"> login</button>
                </form>
            </div>
        )
    }
}