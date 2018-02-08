import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from 'react-router';
import axios from 'axios';



export default class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            name:'',
            password:''
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.logIn = this.logIn.bind(this);

    }

    handleChangeEmail(event) {
        this.setState({name: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    logIn(event) {

        event.preventDefault();
        axios.post('http://localhost:8000/api/users/login/', {
            email:this.state.name,
            password:this.state.password,
        })
        .then(function (res) {
           //send the user to profle 
           window.location.replace('#/profile/'+ res.data._id);

        })
        .catch(function (err) {
            //TODO better apperance for  Error 
            alert(err.response.data.message);
        });
    }


  render() {
    return (
        <div>
            <Header/>
                <div class="container">
                    <div class="col-md-6">
                        <div id="logbox">
                            <form id="signup"  onSubmit={this.logIn}>
                                <h1>account login</h1>
                                    <input 
                                        name="email" 
                                        type="email" 
                                        placeholder="Email address" 
                                        class="input pass" 
                                        required="required"
                                        value={this.state.email}
                                        onChange={this.handleChangeEmail} 
                                        />
                                    <input 
                                        name="password" 
                                        type="password" 
                                        placeholder="Choose a password" 
                                        required="required" 
                                        class="input pass" 
                                        required="required"
                                        value={this.state.password}
                                        onChange={this.handleChangePassword}
                                        />
                                <input
                                    type="submit" 
                                    value="Sign me in!" 
                                    class="inputButton"
                                    />
                                <div class="text-center">
                                    <a id="login_id"><Link to="/signup">Create an account</Link></a> -
                                    <a id="login_id"><Link to="/#"> Forgot password</Link></a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="logbox">
                          Add some thing intrested in the future
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
  }
}