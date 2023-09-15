import classNames from "classnames";
import { NavLink, Outlet, redirect } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteCookie, getCookie } from "../../utils/CookieUtils.js";
import { useEffect, useState } from "react";

const PrivateLayout = () => {
  const authenToken = getCookie("authToken");
  const [isAuthen, setIsAuthen] = useState(false);

  const onLogout = () => {
    console.log("logout");
    deleteCookie("authToken");
    return redirect("/login");
  };

  return (
    <>
      {/* Top Bar Nav */}
      {!authenToken && <Navigate to="/login" />}
      <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li>
                <a
                  className="hover:text-gray-200 hover:underline px-4"
                  href="#"
                />
                Shop
              </li>
              <li>
                <a
                  className="hover:text-gray-200 hover:underline px-4"
                  href="#"
                />
                About
              </li>
            </ul>
          </nav>

          <div className="flex items-center text-lg no-underline text-white pr-6">
            <a className="pl-6" href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto flex flex-wrap py-6">
        {/* Sidebar Section */}

        <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100  flex flex-col items-center px-3">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
                Pages
              </h2>
              <div id="sidebar" className="flex flex-col space-y-1">
                <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) =>
                    isActive ? "text-white bg-blue-800 hover:bg-blue-600" : ""
                  }
                  rel="noopener noreferrer"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to={"/userViewPage"}
                  className={({ isActive }) =>
                    isActive ? "text-white bg-blue-800 hover:bg-blue-600" : ""
                  }
                  rel="noopener noreferrer"
                >
                  Users
                </NavLink>
                <a rel="noopener noreferrer" href="#">
                  Categories
                </a>
                <a rel="noopener noreferrer" href="#">
                  Posts
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
                User
              </h2>
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#">
                  Profile
                </a>
                <a rel="noopener noreferrer" onClick={onLogout}>
                  Logout
                </a>
              </div>
            </div>
          </nav>
        </aside>
        {/* Posts Section */}
        <section className="w-full md:w-2/3  flex flex-col items-center px-3">
          <Outlet />
        </section>
      </div>

      <footer className="w-full border-t bg-white pb-12">
        <div className="w-full container mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
            <a href="#" className="uppercase px-3">
              About Us
            </a>
            <a href="#" className="uppercase px-3">
              Privacy Policy
            </a>
            <a href="#" className="uppercase px-3">
              Terms & Conditions
            </a>
            <a href="#" className="uppercase px-3">
              Contact Us
            </a>
          </div>
          <div className="uppercase pb-6">&copy; myblog.com</div>
        </div>
      </footer>
    </>
  );
};

export default PrivateLayout;
