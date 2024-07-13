import React from "react";
import logoWhite from "../../assets/images/logo-white.svg";
import facebookImg from "../../assets/images/icon-facebook.svg";
import youtubeImg from "../../assets/images/icon-youtube.svg";
import twitterImg from "../../assets/images/icon-twitter.svg";
import pinterestImg from "../../assets/images/icon-pinterest.svg";
import instagramImg from "../../assets/images/icon-pinterest.svg";

const FooterSection = () => {
  return (
    <>
      <section className="bg-veryDarkBlue">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* Logo and Social Links Container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* Logo */}
            <div>
              <img src={logoWhite} alt="" className="h-8" />
            </div>
            {/* Social Links Container */}
            <div className="flex justify-center space-x-4">
              {/* Link 1 */}
              <a href="#">
                <img src={facebookImg} alt="Manage-Facebook" className="h-8" />
              </a>

              {/* Link 2 */}
              <a href="#">
                <img src={youtubeImg} alt="Manage-Youtube" className="h-8" />
              </a>

              {/* Link 3 */}
              <a href="#">
                <img src={twitterImg} alt="Manage-Twitter" className="h-8" />
              </a>

              {/* Link 4 */}
              <a href="#">
                <img
                  src={pinterestImg}
                  alt="Manage-Pinterest"
                  className="h-8"
                />
              </a>

              {/* Link 5 */}
              <a href="#">
                <img src={twitterImg} alt="Manage-Twitter" className="h-8" />
              </a>
            </div>
          </div>

          {/* List Container */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Input Container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 rounded-full focus:outline-none"
                  placeholder="Enter your email"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Send
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
