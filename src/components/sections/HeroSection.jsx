import React from "react";
import heroImage from "../../assets/images/illustration-intro.svg";

const HeroSection = () => {
  return (
    <>
      <section id="hero">
        <div className="container mx-auto mt-10 space-y-0 flex flex-col-reverse items-center px-6 md:space-y-0 md:flex-row">
          {/* Left Item */}
          <div className="flex flex-col mb-32 space-y-9 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone togehter to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              {/* Primary Button */}
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img src={heroImage} alt="manage-hero-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
