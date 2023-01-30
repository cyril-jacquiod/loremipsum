import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// J'injecte le contenu de l'appel du App dans la div dont l'id est "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Appel de mon composant/fonction App, il return des éléments html */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
