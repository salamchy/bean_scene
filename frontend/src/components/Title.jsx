
const Title = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-secondary font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] text-amber-900 mt-20">
        {heading}
      </h1>
      <p className="font-secondary text-[#707070] text-lg md:text-xl mb-10">
        {subHeading}
      </p>
    </div>
  );
};

export default Title;
