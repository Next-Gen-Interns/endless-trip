import React from "react";

const ContactHeader = () => {
  return (
    <section
      className="relative w-full h-72 sm:h-80 md:h-120 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/unsplash.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 ">
        <div className="text-center max-w-3xl">
          {/* Mobile Heading */}
          <h1 className="text-5xl font-extrabold text-white mb-4 sm:hidden">
            Design Your <br /> Dream Trip
          </h1>

          {/* Desktop Heading */}
          <h1 className="hidden sm:block text-4xl md:text-5xl lg:text-[60px] font-extrabold text-white mb-5">
            Design Your Dream Trip
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-[24px] text-white/90">
            Tell us your travel aspirations, and we'll craft a personalized
            itinerary just for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
