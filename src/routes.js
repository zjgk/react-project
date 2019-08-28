import React, { Component } from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Router,
  Route
} from "react-router-dom";
// test1
import Login from "./page/login/login.js";
// test2
import Home from "./page/home/home.js";

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div id="app">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            {/*如果没有path就每个页面都用这个组件，但是用Switch包住就可以上面没匹配到到才走这个路由*/}
            {/*<Route component={Dashboard}/>*/}
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default Routes;
