import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import store from "store/";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import LoginRoute from "./LoginRoute/LoginRoute";
import Greeting from "views/Greeting/Greeting";
import TodoApp from "views/Todo";

/**
 * Register applications all routes here
 * @constructor
 */
const Routes: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/greeting" component={Greeting} />
          <PublicRoute exact path="/todoApp" component={TodoApp} />
          <LoginRoute exact path="/login" component={Greeting} />
          <PrivateRoute exact path="/" component={Greeting} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
