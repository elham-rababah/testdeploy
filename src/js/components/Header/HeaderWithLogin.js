import React from "react";
import { Link } from 'react-router'

export default class HeaderWithLogin extends React.Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);

  }

  logout(event) {
      localStorage.removeItem('userInfo');
  }

  render() {
    return (
        <div>
            <nav class="navbar navbar-default white">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#/signin"><img src="../assets/alist.png" width="95" height="45" class="d-inline-block align-top" alt="Awesome TodoList"/></a>
                    </div>
                        <ul class="nav navbar-nav navbar-right">
                            <li><Link to="#/signin" onClick={this.logout} class="navbar-brand">logout</Link></li>
                        </ul>
                </div>
            </nav>
        </div>
    );
  }
}