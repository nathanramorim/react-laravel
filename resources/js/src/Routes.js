import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { About, Dashboard, Home } from './views';
const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default Routes;
