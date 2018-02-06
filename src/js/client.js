import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, hashHistory, browserHistory} from 'react-router'

import Layout from "./components/Layout";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const app = document.getElementById('app');
ReactDOM.render((
	<Router history={hashHistory}>
    <Route path="/" component={Layout}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
  </Router>
  ), app);