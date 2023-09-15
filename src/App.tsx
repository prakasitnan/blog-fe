import React from "react";
import {
  Route,
  Routes as ReactRoutes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { getCookie } from "./utils/CookieUtils";
import PublicLayout from "./pages/layouts/PublicLayout";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import PublicPostPage from "./pages/PublicPost/PublicPost";

import DashboardView from "./pages/Private/Dashboard/DashboardView";
import PrivateLayout from "./pages/layouts/PrivateLayout";
import UserViewPage from "./pages/Private/Users/UserViewPage";
import UserManagePage from "./pages/Private/Users/UserManagePage";
import Logout from "./pages/Private/Logout/Logout";

function App() {
  const userToken = getCookie("authToken");
  const isAuth = userToken != null ? true : false;

  // return <Routes isAuthorized={isAuth} />;

  const ProtechRoute = ({ isAuthorized, redirectPath = "/login" }: any) => {
    if (!isAuthorized) {
      return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
  };
  return (
    <ReactRoutes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts/:id" element={<PublicPostPage />} />
      </Route>
      <Route element={<ProtechRoute isAuthorized={isAuth} />}>
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/userViewPage" element={<UserViewPage />} />
          <Route path="/userManagePage/:id" element={<UserManagePage />} />
        </Route>
        <Route path="logout" element={<Logout />} />
      </Route>
    </ReactRoutes>
  );
}

export default App;
