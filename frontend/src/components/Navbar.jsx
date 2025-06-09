import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/features/authSlice"; 
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    Navigate("/login", { replace: true });
    toast.success("Logged out successfully");
  };

  return (
    <nav className="text-white px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold font-primary tracking-widest">
          Bean Scene
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-secondary">
          <NavLink to="/" className="hover:text-yellow-400 cursor-pointer">
            Home
          </NavLink>
          <NavLink to="/menu" className="hover:text-yellow-400 cursor-pointer">
            Menu
          </NavLink>
          <NavLink to="/about" className="hover:text-yellow-400 cursor-pointer">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-yellow-400 cursor-pointer">
            Contact Us
          </NavLink>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4 font-secondary">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-full shadow-md text-sm cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-400 text-sm cursor-pointer">
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full shadow-md text-sm cursor-pointer"
              >
                Sign Up
              </Link>
            </>
          )}
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
            <NavLink to="/" className="hover:text-yellow-400 cursor-pointer">
              Home
            </NavLink>
            <NavLink to="/menu" className="hover:text-yellow-400 cursor-pointer">
              Menu
            </NavLink>
            <NavLink to="/about" className="hover:text-yellow-400 cursor-pointer">
              About Us
            </NavLink>
            <NavLink to="/contact" className="hover:text-yellow-400 cursor-pointer">
              Contact Us
            </NavLink>
          </ul>
          <div className="flex flex-col space-y-2 pt-2">
            {user ? (
              <button onClick={handleLogout} className="hover:text-yellow-400 text-sm text-left">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="hover:text-yellow-400 text-sm text-left">
                  Sign In
                </Link>
                <Link to="/register" className="hover:text-yellow-400 text-sm text-left">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
