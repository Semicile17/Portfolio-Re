import { useState } from "react";
import { useNavigate } from "react-router-dom";
import terminal from "../assets/images/terminals.png"

import logo from "../assets/images/logo.png";
import "../index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogoClick = () => {
    console.log('cliacked')
    navigate('/terminal');
  };

  return (
    <div className="flex justify-center w-full items-center bg-blue-500">
      <nav
        className={`bg-blur fixed ${
          menuOpen
            ? `w-full h-screen top-0`
            : `w-4/5 rounded-xl border border-black hover:border-white hover:transition duration-500 ease-in-out top-3`
        } z-20  `}
      >
        <div className="w-full flex flex-wrap items-center justify-between mx-auto px-4 md:py-2  m-2">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >

            <img
              src={logo}
              alt="logo"
              className={`${menuOpen ? `hidden` : `h-7`}`}
            />
 
            <span
              className={`${
                menuOpen ? `hidden` : `text-1xl font-arcade text-secondary`
              }`}
            >
              ohit.
            </span>
          </a>

          <div className="flex flex-row md:order-1  md:space-x-4 rtl:space-x-reverse">
            {!menuOpen && <button onClick={handleLogoClick}>
               <img src={terminal} alt="terminal" className="h-7" />
            </button>
}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className={`${
                menuOpen ? `ml-20` : `ml-0`
              }inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden`}
              aria-controls="navbar-sticky"
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                        <svg
                  className="w-5 h-5 text-black hover:text-secondary transition duration-500 ease-in-out"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6  text-black hover:text-secondary transition duration-600 ease-in-out"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "flex justify-center" : "hidden "
            } w-full md:block md:w-auto`}
          >
            <ul
              className={`font-arcade text-sm flex  ${
                menuOpen ? `space-y-6` : `space-y-0`
              } justify-center flex-col md:flex-row p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700`}
            >
              <li>
                <a
                  href="#home"
                  className="block py-2 px-3 text-primary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
