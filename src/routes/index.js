import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../containers/login";
import RegisterUser from "../containers/Registration";
import Dashboard from "../containers/Dashboard";

const Routes = () => {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={RegisterUser} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
