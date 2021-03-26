import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
    </div>
  );
};

const Main = () => {
  return (
    <main>
      <Box name="Anna" age="50" title="CEO" />
      <Box name="Elena" age="30" title="Programmer" />
      <Box name="Petrovich" age="45" title="Cleaner" />
    </main>
  );
};

export default Main;
