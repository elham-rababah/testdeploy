import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default class SignIn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
            <Header/>
                <div class="container">
                    <div class="col-md-6">
                        <div id="logbox">
                            <form id="signup" method="post" action="/signup">
                                <h1>account login</h1>
                                <input name="user[email]" type="email" placeholder="enter your email" class="input pass"/>
                                <input name="user[password]" type="password" placeholder="enter your password" required="required" class="input pass"/>
                                <input type="submit" value="Sign me in!" class="inputButton"/>
                                <div class="text-center">
                                    <a href="#" id="">create an account</a> - <a href="#" id="">forgot password</a>
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