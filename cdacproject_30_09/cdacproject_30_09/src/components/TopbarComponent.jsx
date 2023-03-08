import React, { Component } from 'react'
import { Link } from "react-router-dom";

import "../css/Topbar.css"

class TopbarComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {

      user: '',
    };
  }

  componentDidMount() {

    const user = localStorage.getItem("userId_borrower")
    this.setState({ user })
  }


  handleLogout = () => {
    alert("Logged out")
    localStorage.removeItem("userId_borrower");
  }
  render() {
    const { user } = this.state;

    return (
      <div className="top" >
        <div className="topLeft">
          <ul className="topList">
            <li className="topListItem1"> BookMyBook <i class="fas fa-book-reader"></i></li>
            <li className="topListItem1">
              <Link to="/" className="link" >Home</Link></li>
            <li className="topListItem2">
            <Link to="/aboutus" className="link" >About</Link></li>

            <li className="topListItem2">
              {user ?
                <Link className="link" to="/addbook">Add Book</Link>
                :
                null
              }
            </li>

            <li className="topListItem2">
              {user ?

                <Link className="link" to="/books">All Books</Link>
                :
                null
              }
            </li>
            <li className="topListItem2">
              {user ?

                <Link className="link" to="/offer">View Offers</Link>
                :
                null
              }
            </li>

          </ul>
        </div>
        <div className="topRight">
          <ul className="topList">
            <li className="topListItem3">
              <Link to="/register" className="link">Sign Up</Link></li>
            <li className="topListItem4">
              <Link to="/" onClick={this.handleLogout} className="link">Logout</Link></li>
            {/* <i className="fas fa-user" ></i> */}
            <li className="topListItem5"><Link to="/" className="link">Account</Link></li>

          </ul>
        </div>

      </div>
    )
  }
}

export default TopbarComponent
