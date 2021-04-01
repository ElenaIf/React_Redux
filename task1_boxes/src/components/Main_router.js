import React from "react";
import Main from "./Main";

import { Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/boxes">Boxes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Main_router = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/boxes" component={Main} />
      </Switch>
    </div>
  );
};

export default Main_router;
