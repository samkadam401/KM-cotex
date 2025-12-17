import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md  backdrop-blur-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="text-2xl md:text-3xl font-extrabold tracking-wide text-sky-700 drop-shadow-[0_0_6px_white]">
          
          <span className="text-sky-400 drop-shadow-[0_0_6px_white]">
            K.M.Cotex Pvt.Ltd.
          </span>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex space-x-8 text-sky-300 font-medium">
          <li>
            <Link to={"/"} className="hover:text-sky-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="hover:text-sky-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to={"/products"} className="hover:text-sky-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:text-sky-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sky-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-3 text-gray-700 font-medium border-t">
          <li>
            <a href="#" className="block hover:text-sky-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-sky-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-sky-600 transition">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-sky-600 transition">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;