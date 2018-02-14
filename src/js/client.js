import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, hashHistory, browserHistory} from 'react-router'

import Layout from "./components/Layout";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/UserProfile/UserProfile";

const isLogin =function (){
	
	if(!localStorage.getItem('userInfo')){
		window.location.replace('#/'+window.location.href.split('/')[4]);
	} else {
		var userInfo =JSON.parse(localStorage.getItem('userInfo'));
		window.location.replace('#/profile/'+ userInfo._id);
	}
}
const app = document.getElementById('app');
ReactDOM.render((
	<Router history={hashHistory}>
	    <Route path="/" component={Layout} onEnter={isLogin}/>
	    <Route path="/signin" component={SignIn} onEnter={isLogin} />
	    <Route path="/signup" component={SignUp} onEnter={isLogin} />
	    <Route path="profile/:username" component={Profile} onEnter={isLogin}/>
  	</Router>
  ), app);