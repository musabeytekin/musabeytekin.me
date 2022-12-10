import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AdminLogin from "./admin/Login";
import AdminPanel from "./admin/Panel";
import AdminDashboard from "./admin/Panel/Dashboard";
import Message from './admin/Panel/Message';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />}>
            <Route path="" element={<AdminDashboard />} />
            <Route path="message" element={<Message/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
