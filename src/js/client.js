import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, hashHistory,browserHistory} from 'react-router'

import Layout from "./components/Layout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const app = document.getElementById('app');
ReactDOM.render((
	<Router history={browserHistory}>
    <Route path="/" component={Layout}/>
    {/* add the routes here */}
    <Route path="/signin" component={Footer}/>
    <Route path="/signup" component={Header}/>
  </Router>
), app);