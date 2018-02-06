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
                            <h1>create an account</h1>
                            <input name="user[name]" type="text" placeholder="What's your username?" pattern="^[\w]{3,16}$" autofocus="autofocus" required="required" class="input pass"/>
                            <input name="user[password]" type="password" placeholder="Choose a password" required="required" class="input pass"/>
                            <input name="user[password2]" type="password" placeholder="Confirm password" required="required" class="input pass"/>
                            <input name="user[email]" type="email" placeholder="Email address" class="input pass"/>
                            <input type="submit" value="Sign me up!" class="inputButton"/>
                            <div class="text-center">
                                already have an account? <a href="#" id="login_id">login</a>
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