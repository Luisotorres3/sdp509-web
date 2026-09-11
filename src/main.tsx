import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/fredoka";
import "@fontsource-variable/dm-sans";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/animations.css";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
