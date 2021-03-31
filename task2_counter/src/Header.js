import React from "react";

let d = new Date();

const Header = () => {
  return (
    <header className="container">
      <h1>Welcome to this awesome counter!</h1>
      <div class="date">By the way, today is: {d.toDateString()}</div>
    </header>
  );
};

export default Header;
