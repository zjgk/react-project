import React, { Component } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Login from "pages/login/login.js";
import Home from "pages/home/home.js";
import Head from "pages/head/head.js";
import GeeLayout from "./layout/GeeLayout";
import CustomIcon from "components/CustomIcon";



// export const history = createBrowserHistory();
// class Routes extends Component {
//   render() {
//     return (
//       <Router history={history}>
//         <div id="app">
//           {/* <Head /> */}
//           <Switch>
//             <Route path="/login" component={Login} />
//             <Route path="/home" component={Home} />
//             {/*如果没有path就每个页面都用这个组件，但是用Switch包住就可以上面没匹配到到才走这个路由*/}
//             {/*<Route component={Dashboard}/>*/}
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }
const indexAuth = ["admin"];

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />

    <Route path="/"
      component={GeeLayout}  >
      <Route path="/home"
        name="首页" authority={indexAuth} component={Home}
        icon={<CustomIcon type="icon-desktop-copy" style={{ fontSize: 15 }} />}
      />
      <Route path="/head" name="head行"
        authority={indexAuth} component={Head}
        icon={<CustomIcon type="icon-tasklist" style={{ fontSize: 15 }} />}
        />
    </Route>
  </Switch>
)
export default Routes;
