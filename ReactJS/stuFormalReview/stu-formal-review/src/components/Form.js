import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = event => {
      const {nameThatIsPassedByUserOnChange, value} = event.target;

      this.setState({
        [nameThatIsPassedByUserOnChange]:value
      });
  };

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          name="username"
          onChange={this.handleUsernameChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
