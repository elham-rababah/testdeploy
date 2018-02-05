import React from "react";

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
          </div>
        </nav>
      </div>
    );
  }
}