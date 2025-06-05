import Button from "./Button";

const Card = ({ image, title, description, price }) => {
  return (
<div className="bg-[#FFF9F1] overflow-visible text-center max-w-xs mx-auto relative pb-5  border border-[#F9C06A]">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-5 ">
        <h2 className="text-2xl font-bold text-amber-900 font-secondary">
          {title}
        </h2>
        <p className="text-[#1E1E1E] text-md mt-2 font-secondary">{description}</p>
        <p className="text-lg font-semibold text-amber-900 mt-2">${price}</p>
      </div>

      {/* Centered Button at Bottom */}
      <button className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 font-secondary px-5 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-md text-sm cursor-pointer mt-5 font-bold">
        Order Now
      </button>
      </div>
  );
};

export default Card;
