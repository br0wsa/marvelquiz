import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Firebase, { FirebaseContext } from "./components/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // provider
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
    <ToastContainer />
  </FirebaseContext.Provider>
);
