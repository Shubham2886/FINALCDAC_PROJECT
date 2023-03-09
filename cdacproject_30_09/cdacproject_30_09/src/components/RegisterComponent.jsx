import React, { Component } from 'react'
import UserService from '../services/UserService';
import "../css/RegisterComponent.css"
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router';


 class RegisterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            full_name: '',
            email: '',
            password: '',
            mobile_number: '',
            aadhar_number: '',
            area: '',
            building: '',
            state: 'Maharashtra',
            city: '',
            pincode: '',
        }
        this.changefull_nameHandler = this.changefull_nameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changemobile_numberHandler = this.changemobile_numberHandler.bind(this);
        this.changeaadhar_numberHandler = this.changeaadhar_numberHandler.bind(this);
        this.changeareaHandler = this.changeareaHandler.bind(this);
        this.changebuildingHandler = this.changebuildingHandler.bind(this);
        this.changestateHandler = this.changestateHandler.bind(this);
        this.changecityHandler = this.changecityHandler.bind(this);
        this.changepincodeHandler = this.changepincodeHandler.bind(this);
    }
    saveUser = (u) => {
        u.preventDefault();
        let users = { full_name: this.state.full_name, email: this.state.email, password: this.state.password, mobileNumber: this.state.mobile_number, aadharNumber: this.state.aadhar_number,address:{area: this.state.area, building: this.state.building, city: this.state.city, state: this.state.state, pincode: this.state.pincode}  };
        console.log('Users => ' + JSON.stringify(users));

        UserService.addUser(users).then((res) => {
            alert(`Hello ${res.data.full_name} You have Registered  sucessfully`)
            this.props.history.push('/');
            // console.log("register sucessfully")
            })
            .catch((error)=>{
              alert("something went wrong");
        });
    }
    cancel() {
        return <Redirect to='/register' />
    }

    changefull_nameHandler = (event) => {
        this.setState({ full_name: event.target.value });
    }
    changeemailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changepasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changemobile_numberHandler = (event) => {
        this.setState({ mobile_number: event.target.value });
    }
    changeaadhar_numberHandler = (event) => {
        this.setState({ aadhar_number: event.target.value });
    }
    changeareaHandler = (event) => {
        this.setState({ area: event.target.value });
    }
    changebuildingHandler = (event) => {
        this.setState({ building: event.target.value });
    }
    changecityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    changestateHandler = (event) => {
        this.setState({ state: event.target.value });
    }
    changepincodeHandler = (event) => {
        this.setState({ pincode: event.target.value });
    }
    render() {
        return (
            <div className="img">
                <br></br>
                {/* <div className="row g-3 p-3">
                    </div> */}
                    <div className="container my-2 bg-dark w-50 text-light p-2  ">
                        <div className="abc">
                            <h2 className="">Register</h2>
 </div>
                            <div className="card-body">
                                <form className="registerForm col-md-12">
                                    <div className="form-group col-md-12">
                                        <label> Full Name: </label>
                                        <input placeholder="Full Name" name="full_name" className="form-control"
                                            value={this.state.full_name} onChange={this.changefull_nameHandler} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label> Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeemailHandler} />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="password" className="form-control" type="password"
                                            value={this.state.password} onChange={this.changepasswordHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label> Mobile Number: </label>
                                        <input placeholder="Mobile Number" name="mobile_number" className="form-control"
                                            value={this.state.mobile_number} onChange={this.changemobile_numberHandler} />
                                    </div>
                                   <div className= "row g-6 p-6">
                                     <div className="form-group col-md-6">
                                        <label> Aadhar Number: </label>
                                        <input placeholder="Aadhar Number" name="aadhar_number" className="form-control"
                                            value={this.state.aadhar_number} onChange={this.changeaadhar_numberHandler} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label> Area: </label>
                                        <input placeholder="Area" name="area" className="form-control"
                                            value={this.state.area} onChange={this.changeareaHandler} />
                                    </div>
                                   </div>
                                    <div class= "row g-6 p-6">
                                    <div className="form-group col-md-6">
                                        <label> Building: </label>
                                        <input placeholder="Building" name="building" className="form-control"
                                            value={this.state.building} onChange={this.changebuildingHandler} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label> City: </label>
                                        <input placeholder="City" name="city" className="form-control"
                                            value={this.state.city} onChange={this.changecityHandler} />
                                    </div>
                                    </div>
                           
                                   <div class="row g-6 p-6">
                                   <div className="form-group col-md-6">
                                        <label> State: </label>
                                        <input placeholder="State" name="building" className="form-control"
                                            value={this.state.state} onChange={this.changestateHandler} readOnly />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label> Pin Code: </label>
                                        <input placeholder="Pin Code" name="pincode" className="form-control"
                                            value={this.state.pincode} onChange={this.changepincodeHandler} />
                                    </div></div> 
                                   
                                    <div class="">
                                    <button className="btn btn-success" onClick={this.saveUser} style={{ marginTop: "10px" }}>Sign Up</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Cancel</button>
                                    </div>

                                   
                                </form>

                            </div>
                        </div>

                </div>
            
        )
    }
}

export default withRouter(RegisterComponent)