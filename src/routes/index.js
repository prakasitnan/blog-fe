// Layouts
import PrivateLayout from "../pages/layouts/PrivateLayout";
import PublicLayout from "../pages/layouts/PublicLayout";

// Pages
import { renderRoutes } from "./generate-routes";
import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";
import PublicPostListPage from "../pages/PublicPostsList/PublicPostList";
import PublicPostPage from "../pages/PublicPost/PublicPost";
import DashboardView from "../pages/Private/Dashboard/DashboardView";
import UserViewPage from "../pages/Private/Users/UserViewPage";
import UserManagePage from "../pages/Private/Users/UserManagePage";

export const routes = [
  {
    layout: PublicLayout,
    isPublic: true,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/login",
        isPublic: true,
      },
      {
        name: "home",
        title: "Home page",
        component: HomePage,
        path: "/",
        isPublic: true,
      },
      {
        name: "posts",
        title: "posts",
        hasSiderLink: true,
        isPublic: true,
        routes: [
          {
            name: "post-list",
            title: "List of post",
            hasSiderLink: true,
            isPublic: true,
            component: PublicPostListPage,
            path: "/posts",
          },
          {
            name: "post",
            title: "post",
            isPublic: true,
            hasSiderLink: true,
            component: PublicPostPage,
            path: "/posts/:id?",
          },
        ],
      },
    ],
  },
  {
    layout: PrivateLayout,
    routes: [
      {
        name: "Dashboard",
        title: "Dashboard page",
        component: DashboardView,
        path: "/dashboard",
      },
      {
        name: "UserViewPage",
        title: "UserViewpage",
        component: UserViewPage,
        path: "/userViewPage",
      },
      {
        name: "UserManagePage",
        title: "UserManagepage",
        component: UserManagePage,
        path: "/userManagePage/:id?",
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
