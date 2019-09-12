import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss";
import { Router } from "react-router";
import routesInfo from "./routes";
import { Provider } from "react-redux";
import configureStore from "./store/index";
import "./assets/styles/global.scss";
import createStaticRoutes from "./utils/createStaticRoutes";
import renderRoutes from "./utils/renderRoutes";
import createHashHistory from "history/createHashHistory";
import { LocaleProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import { PathnameRecord } from "utils/hoc/pathname-record";
export const history = new createHashHistory();


const requireModels = require.context("./store/reducers", false, /\.js$/);
requireModels.keys().forEach(filename => {
  configureStore.pushModel(requireModels(filename).default);
});
const store = configureStore.createStore(window.__PRELOADED_STATE__);
let staticRoutes = createStaticRoutes(routesInfo());
console.log(999, routesInfo(), staticRoutes);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <LocaleProvider locale={zhCN}>
      <PathnameRecord store={store}>
        {renderRoutes(staticRoutes)}
        </PathnameRecord>
      </LocaleProvider>
    </Router>
  </Provider>,

  document.getElementById("root")
);
