import React from "react";
import logo from "../assets/images/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="relative container mx-auto p-6">
        {/* Flexbox */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src={logo} alt="manage-logo" />
          </div>
          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          {/* Primary Button */}
          <a
            href="#"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>

          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className={
              isClicked
                ? "open block hamburger md:hidden focus:outline-none"
                : "block hamburger md:hidden focus:outline-none"
            }
            onClick={handleClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className={
              isClicked
                ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                : "absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            }
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
