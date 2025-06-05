import Coffee from "../assets/coffee.png";
import Coffee_Blast from "../assets/coffee_blast.png";
import Button from "./Button";

const Best_Coffee = () => {
  return (
    <div className="w-full mt-10 md:mt-20 relative mb-10">
      {/* Background Blast Image left side*/}
      <div className="absolute mt-175 md:mt-72 left-0 -z-10">
        <img
          className="w-[300px] md:w-[400px] h-auto"
          src={Coffee_Blast}
          alt="Coffee Blast Background"
        />
      </div>

      {/* Main Content */}
      <div className="px-10 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Text Section */}
        <div className="mt-10 md:mt-0">
          <h1 className="font-secondary font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] text-amber-900">
            Discover the best coffee
          </h1>
          <p className="font-secondary text-lg md:text-xl text-[#707070] mt-5">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <Button name="Learn More" />
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src={Coffee}
            alt="coffee cup"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Best_Coffee;
