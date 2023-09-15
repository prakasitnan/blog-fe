import classNames from "classnames";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const PublicLayout = () => {
  // return <Outlet />;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar Nav */}
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

      {/* Text Header */}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <NavLink
            to={"/"}
            className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
          >
            Minimal Blog
          </NavLink>
          <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet</p>
        </div>
      </header>

      {/* Topic Nav */}
      <nav
        className="w-full py-6 border-t border-b bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="block sm:hidden">
          <a
            href="#"
            className="block md:hidden text-basae font-bold uppercase text-center flex justify-center items-center"
          >
            Topic:{" "}
            <i
              className={classNames(
                `fas ml-2 ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`
              )}
            ></i>
          </a>
        </div>
        <div
          className={`w-full flex-grow sm:flex sm:items-center sm:w-auto display:${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Technology
            </a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Automotive
            </a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Finance
            </a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Politics
            </a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Culture
            </a>
            <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Sports
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto flex flex-wrap py-6">
        {/* Posts Section */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <Outlet />
        </section>

        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shaow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <a
              href="#"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
              />
            </div>
            <a
              href="#"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
            >
              <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
            </a>
          </div>
        </aside>
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

export default PublicLayout;
