import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Link } from 'react-router';
import axios from 'axios';
axios.defaults.baseURL = 'http://awesomekeeplist.herokuapp.com';

//TODO Global axios defaults


export default class SignIn extends React.Component {
    constructor(props,context) {
        super();

        this.state = {
            name:'',
            password:'',
            password2:'',
            email:'',
        };

        this.addNewUser = this.addNewUser.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePassword2 = this.handleChangePassword2.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);

    }

    addNewUser(event) {
        event.preventDefault();
        if (this.isPasswordMatch(this.state.password,this.state.password2)){
            axios.post('/api/users/addnewuser/', {
                name:this.state.name,
                password:this.state.password,
                password2:this.state.password2,
                email:this.state.email,
            })
            .then(function (res) {
                localStorage.setItem('userInfo', res.data);
                //send the user to profle 
                window.location.replace('#/profile/'+ res.data._id);

            })
            .catch(function (err) {
                //TODO better apperance for  Error 
                alert(err.response.data.message);        
            });
        }else {
            alert("Passwords Don't Match");
        }
     
    }

    isPasswordMatch(pass,confirmPass){
        if(pass === confirmPass){
            return true ;
        } else {
            return false;
        }

    }

    // TODO: its beter to handel all input filed togother in one function
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleChangePassword2(event) {
        this.setState({password2: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    } 

    render() {
        return (
            <div>
                <Header/>
                    <div class="container">
                        <div class="col-md-6">
                            <div id="logbox">
                                <form id="signup" onSubmit={this.addNewUser}>
                                    <h1>create an account</h1>
                                    <input 
                                        name="name"
                                        type="text" 
                                        placeholder="What's your Name?" 
                                        pattern="^[\w]{3,16}$" 
                                        autofocus="autofocus" 
                                        required="required" 
                                        class="input pass"
                                        value={this.state.name}
                                        onChange={this.handleChangeName}
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
                                        name="password2" 
                                        type="password" 
                                        placeholder="Confirm password" 
                                        required="required" 
                                        class="input pass" 
                                        value={this.state.password2}
                                        onChange={this.handleChangePassword2}
                                        />
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
                                        type="submit" 
                                        value="Sign me up!" 
                                        class="inputButton"
                                        />
                                    <div class="text-center">
                                        already have an account? <a id="login_id"><Link to="/signin">Sign In</Link></a>
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