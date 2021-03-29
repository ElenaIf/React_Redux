import Box from "./Box";
import React, { Component } from "react";

class Main extends Component {
  state = {
    persons: [
      {
        name: "Elena",
        age: 33,
        title: "CEO",
      },
      {
        name: "Toni",
        age: 33,
        title: "Engineer",
      },
      {
        name: "Petrovich",
        age: 50,
        title: "Cleaner",
      },
    ],
  };

  clickHere = () => {
    this.setState({
      persons: [
        {
          name: "No name here, sorry",
          age: 100,
          title: "No title",
        },
        {
          name: "No nanem here",
          age: 150,
          title: "No title",
        },
        {
          name: "Also no name",
          age: 350,
          title: "Nothing",
        },
      ],
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.clickHere}>Click here also</button>
        <Box
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          title={this.state.persons[0].title}
        />
        <Box
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          title={this.state.persons[1].title}
        />
        <Box
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          title={this.state.persons[2].title}
        />
      </main>
    );
  }
}

export default Main;
