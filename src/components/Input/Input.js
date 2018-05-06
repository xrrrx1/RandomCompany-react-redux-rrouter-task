import React, { Component } from "react";

export class Input extends Component {
  constructor(props) {
    super();
  }

  static propTypes = {};

  state = {
    message: ""
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange.bind(this)}
        />
        <p>
          Hello, {this.state.message}
        </p>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }
}
