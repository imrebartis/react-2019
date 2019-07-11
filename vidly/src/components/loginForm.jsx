import React, { Component } from "react";

class LoginForm extends Component {
  usernameRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    // call the server
    const username = this.usernameRef.current.value.trim();
    console.log(username);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input autoFocus ref={this.usernameRef} id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Log in</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
