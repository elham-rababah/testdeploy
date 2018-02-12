import React from "react";
import { Link } from 'react-router'


export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
        <nav class="navbar navbar-default white">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"><img src="../assets/alist.png" width="45" height="35" class="d-inline-block align-top" alt="Awesome TodoList"/></a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><Link to="/signin" class="navbar-brand">Sign In</Link></li>
                    <li><Link to="/signup" class="navbar-brand">sign Up</Link></li>
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}