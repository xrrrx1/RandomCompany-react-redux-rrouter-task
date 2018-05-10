import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super();
  }

  static propTypes = {};

  state = {
    count: 0
  };

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  resetCounter = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}> Increment </button>
        <button onClick={this.decrementCounter}> Decrement </button>
        <button onClick={this.resetCounter}> Reset</button>
        <div>
          <span>
            {this.state.count}
          </span>
        </div>
      </div>
    );
  }
}
