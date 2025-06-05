
const Button = ({name}) => {
  return (
    <div>
      <button className="bg-yellow-400 hover:bg-yellow-500 mt-5 text-black font-semibold cursor-pointer font-secondary px-8 py-3 rounded-full shadow-md text-sm w-max">
        {name}
      </button>
    </div>
  );
};

export default Button;
