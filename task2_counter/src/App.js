import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

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
    if (this.state.counter !== 0) {
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
    let circleClass = `
    ${this.state.counter === 0 ? "" : this.state.counter % 2 === 0 ? "even" : "odd"} circle
    `;

    return (
      <div className="container">
        <Header />
        <main className="container">
          <h1 className={circleClass}>{this.state.counter}</h1>
          <div>
            <button className="btn-add" onClick={this.addHandler}>
              Like
            </button>
            <button className="btn-remove" onClick={this.removeHandler}>
              Unlike
            </button>
            <button className="btn-reset" onClick={this.resetHandler}>
              Reset
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
