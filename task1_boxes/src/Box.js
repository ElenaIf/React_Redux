import React from "react";

const addLikes = () => {
  console.log("Like!");
};

const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <button onClick={addLikes}>Click me</button>
    </div>
  );
};

export default Box;
