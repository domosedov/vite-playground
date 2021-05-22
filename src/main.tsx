import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/app";
import { RouteWatcher } from "./components/route-watcher";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteWatcher />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
