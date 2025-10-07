import React, { Component } from "react";

export class CounterUsingClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleIncrement() {
    this.setState({count : this.state.count+1});
  }
  handleDecrement() {
    this.setState({count : this.state.count+1});
  }
  render() {
    let { count } = this.state;
    return (
      <>
        <h3>Count : {count}</h3>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    );
  }
}
