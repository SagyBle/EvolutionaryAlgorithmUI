import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header>
      <div className="header-div">
        <h1>Distribution of Football players into groups with dependencies</h1>
      </div>
    </header>
    <App />
  </React.StrictMode>
);
