import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// 1. Import <Provider>
// 2. Import `store`

ReactDOM.createRoot(document.getElementById("root")).render(
  // 3. Wrap <App> in <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
