import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SocketProvider } from "./context/SocketProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketProvider>
        <div className="header">
          <div className="header-1">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/google-meet-7520865-7197085.png?f=webp&w=256"
              alt="Logo"
              className="logo"
            />
            <p className="logo-text">Meet Your Frindes</p>
          </div>
          <div className="header-2">
            <h1 className="app-name">Matalu Aduko</h1>
          </div>
        </div>
        <App />
      </SocketProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
