import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };

  addHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  removeHandler = () => {
    if (this.state.counter <= 0) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="circle">{this.state.counter}</h1>
        <button onClick={this.addHandler}>Like</button>
        <button onClick={this.removeHandler}>Unlike</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;
