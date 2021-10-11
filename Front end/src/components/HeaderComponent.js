import React, { Component } from 'react';
import AuthService from "../services/auth.service";
import { Switch, Route, Link } from "react-router-dom";

class HeaderComponent extends Component {


  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: false,
    };
  }


  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }


  render() {
    return (

      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand" style={{ marginLeft: "5%" }} href="#">Know Your Neighborhood</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" style={{marginLeft:"5%"}} id="navbarColor01">
                <ul class="navbar-nav me-auto">
                  {this.state.currentUser &&
                    <li class="nav-item">
                      <Link to={"/stores"} className="nav-link">
                        Home
                      </Link>
                    </li>}
                  {this.state.currentUser &&
                    <li class="nav-item">
                      <a class="nav-link" href="/aboutus">About us</a>
                    </li>}
                  {this.state.currentUser &&
                    <li class="nav-item">
                      <a class="nav-link" href="contactus">Contact Us</a>
                    </li>}
                  {this.state.currentUser &&
                    <li class="nav-item">
                      <a class="nav-link" href="/terms">Terms & Conditions</a>
                    </li>}
                </ul>

                <ul class="d-flex" style={{ marginRight: "7%" }}>

                  {this.state.currentUser == false && (
                    <li class="nav-item" style={{ marginRight: "15%" }}>
                      <a class="btn btn-secondary" href="/register">Register</a>
                    </li>)}

                  {this.state.currentUser == false && (
                    <li class="nav-item">
                      <a class="btn btn-secondary" href="/login">Login</a>
                    </li>)}

                  {this.state.currentUser && (
                    <li className="nav-item text-right">
                      <a href="/login" class="btn btn-secondary" onClick={this.logOut}>LogOut</a>
                    </li>
                    )}
                </ul>

              </div>
            </div>
          </nav>
        </div>
        
          <div style={{margin:"2% 0"}}>
            {this.state.currentUser && (
                <h1> Welcome {this.state.currentUser.username}</h1>
            )}
          </div>
      </div>
    )
  }
}

export default HeaderComponent


