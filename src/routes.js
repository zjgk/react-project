import React, { Component } from "react";
import {
  Switch,
  Router,
  Route
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Login from "./page/login/login.js";
import Home from "./page/home/home.js";
import Head from "./page/head/head.js";

export const history = createBrowserHistory();
class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <div id="app">
          {/* <Head /> */}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            {/*如果没有path就每个页面都用这个组件，但是用Switch包住就可以上面没匹配到到才走这个路由*/}
            {/*<Route component={Dashboard}/>*/}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Routes;
