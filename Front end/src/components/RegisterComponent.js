import React, { Component } from 'react'
import StoreService from '../services/StoreService';
import AuthService from "../services/auth.service";

class RegisterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userName:'',
            userPassword: '',
            email: '',
            name: '',
            number:''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
       

        this.registerUser = this.registerUser.bind(this);
    }


    registerUser = (e) => {
        e.preventDefault();
        let user = {userName: this.state.userName, userPassword: this.state.userPassword, email: this.state.email,name: this.state.name, number: this.state.number};
        console.log('user => ' + JSON.stringify(user));

        // step 5
          //  StoreService.saveUser(user).then(res =>{
                AuthService.register(user).then(res =>{
                console.log("Response is "+JSON.stringify(res) + res.status);
                console.log("Response Stauts is "+ res.status);
                if (res.status==200){
                    this.props.history.push('/login');
                }else{
                    this.props.history.push('/register');
                }
            });
        
    }
    
    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({userPassword: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeNumberHandler= (event) => {
        this.setState({number: event.target.value});
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
                                    <h3> Register New User </h3>
                                    <hr style={{width:"50%",margin:"auto",height:"2px"}}></hr>
                                <div className = "card-body">
                                    
                                    <form className="mt-4" style={{fontSize:"20px",fontWeight:"bold"}}>
                                       <div className = "form-group mb-3">
                                            <label style={{float:"left",marginBottom:"4px"}}> Name </label>
                                            <input placeholder="Enter Your  Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>

                                        <div className = "form-group mb-3">
                                            <label style={{float:"left",marginBottom:"4px"}}> UserName : </label>
                                            <input placeholder="Enter Your Login Name" name="username" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group mb-3">
                                            <label style={{float:"left",marginBottom:"4px"}}> Password: </label>
                                            <input placeholder="Enter Your Password" name="userpassword" className="form-control" 
                                                value={this.state.userPassword} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group mb-3">
                                            <label style={{float:"left",marginBottom:"4px"}}> Email </label>
                                            <input placeholder="Enter Your Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group mb-3">
                                            <label style={{float:"left",marginBottom:"4px"}}> Mobile </label>
                                            <input placeholder="Enter Your Mobile Number" name="number" className="form-control" 
                                                value={this.state.number} onChange={this.changeNumberHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.registerUser}>Save</button>
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

export default RegisterComponent