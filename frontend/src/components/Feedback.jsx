import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "./Title";
import Feedback1 from "../assets/avatar.jpg";

const testimonials = [
  {
    name: "Jonny Thomas",
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
    image: Feedback1,
  },
  {
    name: "Emily Carter",
    message: `This coffee changed my mornings! Rich flavor, smooth texture, and perfect balance.`,
    image: Feedback1,
  },
  {
    name: "David Smith",
    message: `Best experience ever! The aroma, the ambiance, and the taste—10/10.`,
    image: Feedback1,
  },
];

const Feedback = () => {
  return (
    <div className=" py-10 px-4 sm:px-10 md:px-20">
      <Title
        heading="Our coffee perfection feedback"
        subHeading="Our customers have amazing things to say about us"
      />

      <Carousel
        showArrows
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        className="max-w-5xl mx-auto mt-10"
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-lg shadow-md border border-[#F9C06A] text-center"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-secondary">
              "{item.message}"
            </p>
            <img
              src={item.image}
              alt={item.name}
              className="!w-[64px] !h-[64px] object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-md"
            />
            <h3 className="text-xl font-semibold text-amber-900 font-secondary">
              {item.name}
            </h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Feedback;
