import Cup from "../assets/cup.png";
import Coffee_Bean from "../assets/coffee_bean.png";
import Button from "./Button";

const Banner = () => {
  return (
    <div
      className="w-full relative bg-cover bg-center h-[700px] sm:h-[650px] md:h-[615px]"
      style={{ backgroundImage: "url('./coffe.png')" }}
    >
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[#b2520e] opacity-60 z-0"></div>

      {/* Coffee Bean Image Positioned to Right */}
      <img
        src={Coffee_Bean}
        alt="Coffee Bean"
        className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[500px] h-full object-cover z-0 opacity-30 md:opacity-100"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full items-center px-6 sm:px-10 md:px-20 py-10 text-center md:text-left">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 font-secondary mb-10 md:mb-0">
          <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-snug">
            Get a chance to have an Amazing morning
          </h1>
          <p className="text-base sm:text-lg text-white mt-4 sm:mt-5">
            We are giving you a one-time opportunity to <br className="hidden sm:block" />
            experience a better life with coffee.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Button name="Order Now" />
          </div>
        </div>

        {/* Right Cup Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Cup}
            alt="Coffee Cup"
            className="w-[180px] sm:w-[220px] md:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
