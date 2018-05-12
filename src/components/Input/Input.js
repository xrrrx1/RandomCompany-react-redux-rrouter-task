import React, { Component } from "react";

export class Input extends Component {
  // constructor(props) {
  //   super();
  //   this.handleChange = this.handleChange.bind(this);
  // }
  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

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
          onChange={this.handleChange}
        />
        <p>
          Hello, {this.state.message}
        </p>
      </div>
    );
  }

  // handleChange(e) {
  //   this.setState({
  //     message: e.target.value
  //   });
  // }
}
