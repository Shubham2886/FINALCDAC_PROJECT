import React, { Component } from 'react'

import UserService from '../services/UserService';
import "../css/Login.css"
import { withRouter } from "react-router-dom";

 class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }

        this.saveUser = this.saveUser.bind(this);
     
    }

    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    saveUser = (u) => {
        u.preventDefault();
        let users = { email: this.state.email, password: this.state.password };
        console.log('Users => ' + JSON.stringify(users));

        UserService.login(users).then((res) => {
            console.log(res.data.email)
            console.log(res.data);
            if (res.data === '') {

                console.log("Credentials wrong")
                alert("Please enter valid email or password")
                this.props.history.push('/login');

            } else {

                localStorage.setItem("userId_borrower", res.data.userId);
                alert("Logged in successfully");
                //return <Redirect to="/books" />
                this.props.history.push('/books');
                
            }
           
        }) 

    }


    render() {
        const { email, password } = this.state;

        return (
            <div className="login">

                <form className="loginForm">
                    <label>Username</label>
                    <input
                        type="text"
                        className="loginInput"
                        placeholder="Enter email-Id"
                        value={email}
                        onChange={this.changeEmail}


                    />
                    <label>Password</label>
                    <input
                        type="password"
                        className="loginInput"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.changePassword}

                    />
                    <button className="loginButton" type="submit" onClick={this.saveUser} >Login</button>
                </form>

            </div>
        )
    }
}
export default withRouter(Login)