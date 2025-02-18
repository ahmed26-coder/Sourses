import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-bg px-[1%] pt-[1%]">
      <div className="bg-Orange rounded-md">
        <h1 className="text-white justify-center py-3 flex items-center text-sm md:text-lg">
          Free Courses 🌟 Sale Ends Soon, Get It Now 
          <FaArrowRight className="ml-[1%] mt-1" />
        </h1>
      </div>
      <div className="mx-[7%] mt-[1%] flex justify-between items-center">
        <div className="flex items-center gap-10">
          <img src={logo} alt="logo" />
          <ul className="hidden md:flex space-x-5 text-lg">
            <Link to="/" className="hover:bg-gray-200 py-2.5 px-3 rounded-md">Home</Link>
            <Link to="/Courses" className="hover:bg-gray-200 py-2.5 px-3 rounded-md">Courses</Link>
            <Link to="/About" className="hover:bg-gray-200 py-2.5 px-3 rounded-md">About Us</Link>
            <Link to="/Pricing" className="hover:bg-gray-200 py-2.5 px-3 rounded-md">Pricing</Link>
            <Link to="/Contact" className="hover:bg-gray-200 py-2.5 px-3 rounded-md">Contact</Link>
          </ul>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex md:space-x-10 space-x-5 text-lg">
            <button className="hover:text-Orange">Sign Up</button>
            <button className="text-white bg-Orange px-4 py-2 rounded-md">Log in</button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-lg p-5 flex flex-col items-center space-y-3 z-50">
          <button onClick={() => setMenuOpen(false)} className="text-3xl absolute top-5 right-5">
            <FaTimes />
          </button>
          <Link to="/" className="hover:bg-gray-200 py-2 w-full  text-center rounded-lg text-xl mt-8" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/Courses" className="hover:bg-gray-200 py-2 w-full  text-center rounded-lg text-xl" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/About" className="hover:bg-gray-200 py-2 w-full  text-center rounded-lg text-xl" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/Pricing" className="hover:bg-gray-200 py-2 w-full  text-center rounded-lg text-xl" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link to="/Contact" className="hover:bg-gray-200 py-2 w-full  text-center rounded-lg text-xl" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
      <div className="border-b border-gray-200 py-[0.5%]"></div>
    </div>
  );
};

export default Navbar;
