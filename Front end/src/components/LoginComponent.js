import React, { Component } from 'react'
import StoreService from '../services/StoreService';
import AuthService from "../services/auth.service";

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userName:'',
            userPassword: '',
            errorMessage:''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
       
        this.loginUser = this.loginUser.bind(this);
    }


    loginUser = (e) => {
        e.preventDefault();
        let user = {userName: this.state.userName, userPassword: this.state.userPassword};
        console.log('loginuser => ' + JSON.stringify(user));


        AuthService.login(user).then(() => {
          this.props.history.push("/stores");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            errorMessage: resMessage
          });
        }
      );

        
    }
    
    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({userPassword: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{padding:"30px"}}>
                                    <h3> Login Here </h3>
                                    <hr style={{width:"50%",margin:"auto",height:"2px"}}></hr>
                                <div className = "card-body">
                                 {this.state.errorMessage && <div className="alert alert-danger" role="alert"> { this.state.errorMessage } </div> }
                                    
                                    <form className="mt-4" style={{fontSize:"20px",fontWeight:"bold"}}>
                                        <div className = "form-group mb-3">
                                            <label style={{float:"left",marginBottom:"4px"}}> UserName </label>
                                            <input placeholder="Enter Your Login Name" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group mb-3">
                                            <label style={{float:"left",marginBottom:"4px"}}> Password </label>
                                            <input placeholder="Enter Your Password" name="userPassword" className="form-control" 
                                                value={this.state.userPassword} onChange={this.changePasswordHandler}/>
                                        </div>
                            


                                        <button className="btn btn-success" onClick={this.loginUser}>Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginComponent