import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // menu close after click
  };

  return (
    <nav className="shadow-md backdrop-blur-sm fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLinkClick}
          className="text-2xl md:text-3xl font-extrabold tracking-wide text-sky-700"
        >
          <span className="text-sky-400">K.M.Cotex Pvt.Ltd.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sky-300 font-medium">
          <li><Link to="/" className="hover:text-sky-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-sky-600">About</Link></li>
          <li><Link to="/products" className="hover:text-sky-600">Products</Link></li>
          <li><Link to="/contact" className="hover:text-sky-600">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sky-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-3 text-gray-700 font-medium border-t">
          <li>
            <Link to="/" onClick={handleLinkClick} className="block hover:text-sky-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick} className="block hover:text-sky-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={handleLinkClick} className="block hover:text-sky-600">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick} className="block hover:text-sky-600">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;