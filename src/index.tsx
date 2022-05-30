/*
 * @Author: dingling
 * @Date: 2021-12-10 11:21:31
 * @Last Modified by: dingling
 * @Last Modified time: 2021-12-23 18:02:37
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <App />
    </Router>
  </ConfigProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
