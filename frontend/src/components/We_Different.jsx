import Coffee_Blast1 from "../assets/coffee_blast1.png";
import FeatureCard from "./FeaturedCard";
import Title from "./Title";
import Image1 from "../assets/coffee-beans.png";
import Image2 from "../assets/badge.png";
import Image3 from "../assets/coffee-cup.png";
import Image4 from "../assets/best-price.png";
import Button from "./Button";

const We_Different = () => {
  return (
    <div className="relative px-10 md:px-20 lg:px-32">
      {/* Background Blast Image right side*/}
      <div className="absolute right-0 -top-6  -z-10 mt-40 md:mt-15 lg:mt-0">
        <img
          className="w-[300px] md:w-[400px] h-auto"
          src={Coffee_Blast1}
          alt="Coffee Blast Background"
        />
      </div>
      <div className="my-10">
        <Title heading="Why are we different?" subHeading="We don’t just make your coffee, we make your day!" />
        <div className="mt-24 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
            <FeatureCard icon={Image1} title="Supreme Beans" description="Beans that provides great taste" />
            <FeatureCard icon={Image2} title="Supreme Beans" description="Beans that provides great taste" />
            <FeatureCard icon={Image3} title="Supreme Beans" description="Beans that provides great taste" />
            <FeatureCard icon={Image4} title="Supreme Beans" description="Beans that provides great taste" />
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
            <p className="font-secondary text-lg md:text-xl text-[#707070]">Great ideas start with great coffee, Lets help you achieve that</p>
            <h2 className="font-secondary text-3xl text-amber-900 font-bold">Get started today.</h2>
            <Button name="Join Us" className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default We_Different;
