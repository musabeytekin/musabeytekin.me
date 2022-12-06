import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./admin/Login";
import AdminPanel from "./admin/Panel";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/admin/dashboard" element={<AdminPanel/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
