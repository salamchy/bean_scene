const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#FFEFD9] p-6 text-center w-[250px] shadow-sm px-8 md:ml-8 border border-[#F9C06A]">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <img src={icon} alt="feature icon" className="w-[88px] h-[88px]" />
      </div>

      {/* Title */}
      <h3 className="text-amber-900 font-secondary font-bold text-2xl mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 font-secondary text-lg">{description}</p>
    </div>
      );
};

export default FeatureCard;