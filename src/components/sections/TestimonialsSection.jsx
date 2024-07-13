import React from "react";
import avatar1 from "../../assets/images/avatar-anisha.png";
import avatar2 from "../../assets/images/avatar-ali.png";
import avatar3 from "../../assets/images/avatar-richard.png";

const TestimonialsSection = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section id="testimonials">
        {/* Container to heading and testm blocks */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center">
            What's different about Manage?
          </h2>

          {/* Testimonials Container */}
          <div className="flex flex-col mt-24 space-y-12 md:flex-row md:space-x-6 md:space-y-0">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={avatar1} className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={avatar2} className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={avatar3} className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="my-16">
            {/* Primary Button */}
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
