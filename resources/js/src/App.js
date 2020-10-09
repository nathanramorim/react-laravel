import React from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import Routes from "./Routes";
const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <div className="content">
            <Routes/>
        </div>
      </div>
    </Router>
  );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
