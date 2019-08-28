import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss";
import Routes from "./routes";
import { Provider } from "react-redux";
import configureStore from "./store/index";

const requireModels = require.context("./store/reducers", false, /\.js$/);
requireModels.keys().forEach(filename => {
  configureStore.pushModel(requireModels(filename).default);
});
console.log(window,'window.__PRELOADED_STATE__',configureStore)
const store = configureStore.createStore(window.__PRELOADED_STATE__);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
