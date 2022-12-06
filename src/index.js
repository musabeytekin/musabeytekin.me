import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import AdminLogin from "./admin/Login";
import AdminPanel from "./admin/Panel";
import AdminDashboard from "./admin/Panel/Dashboard";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
