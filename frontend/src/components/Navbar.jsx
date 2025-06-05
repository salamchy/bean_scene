import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold font-primary tracking-widest">Bean Scene</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-secondary">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4 font-secondary">
          <button className="hover:text-yellow-400 text-sm cursor-pointer">Sign In</button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full shadow-md text-sm cursor-pointer">
            SignUp
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          <ul className="flex flex-col space-y-3 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Menu</li>
            <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
          </ul>
          <div className="flex flex-col space-y-2 pt-2">
            <button className="hover:text-yellow-400 text-sm text-left">Sign In</button>
            <Button name="Sign Up" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;