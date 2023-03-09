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
        // this.emailValidation = this.emailValidation.bind(this);
     
    }
    
    changeEmail = (event) => {
         this.setState({ email: event.target.value });
        console.log(this.state.email);
        // if(this.emailValidation())
        //  document.getElementById("Email-Validation").style.visibility = "visible"
        // else 
        // document.getElementById("Email-Validation").style.visibility = "hidden"
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    // emailValidation(){
    //     const regex = /^([a-zA-Z0-9]([a-zA-Z0-9_\.]+)?[a-zA-Z0-9])@([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
    //     if(!this.state.email || regex.test(this.state.email) === false){
    //         this.setState({
    //             error: "Email is not valid"
    //         });
    //         return false;
    //     }
    //     return true;
    // }
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
            <div className="login col-md-9">

                <form className="loginForm">
                    <h2 className='a' >Username</h2>
                    <input
                        type="text"
                        className="loginInput"
                        placeholder="Enter email-Id"
                        value={email}
                        onChange={this.changeEmail}
                        />
                        <div id="Email-Validation" >
                            Email is not valid
                        </div>
                    <h2 className='a'>Password</h2>
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
