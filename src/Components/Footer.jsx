import logo from "../assets/Logo.svg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-White2">
      <div className="flex flex-col md:flex-row justify-between px-[10%] pt-[3%] space-y-6 md:space-y-0">
        <div className="space-y-4 md:text-left">
          <img src={logo} alt="Logo" className="md:mx-0" />
          <p className="flex items-center md:justify-start text-lg">
            <MdEmail className="mr-2 text-2xl" /> hello@skillbridge.com
          </p>
          <p className="flex items-center md:justify-start text-lg">
            <FaPhoneAlt className="mr-2 text-2xl" /> +91 91813 23 2309
          </p>
          <p className="flex items-center md:justify-start text-lg">
            <IoLocationSharp className="mr-2 text-2xl" /> Somewhere in the World
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
          <div className="flex gap-10 md:gap-20">
            <div className=" sm:text-left">
              <h2 className="text-2xl font-bold">Home</h2>
              <p className="text-lg text-gray-600">Benefits</p>
              <p className="text-lg text-gray-600">Our Courses</p>
              <p className="text-lg text-gray-600">Our Testimonials</p>
              <p className="text-lg text-gray-600">Our FAQ</p>
            </div>
            <div className=" sm:text-left">
              <h2 className="text-2xl font-bold">About Us</h2>
              <p className="text-lg text-gray-600">Company</p>
              <p className="text-lg text-gray-600">Achievements</p>
              <p className="text-lg text-gray-600">Our Goals</p>
            </div>
          </div>

          <div className=" sm:text-left">
            <h2 className="text-2xl font-bold">Social Profiles</h2>
            <div className="flex sm:justify-start gap-5 text-3xl mt-4">
              <FaFacebook className="bg-gray-300 h-10 w-10 p-1 border border-gray-400 rounded-lg" />
              <FaGithub className="bg-gray-300 h-10 w-10 p-1 border border-gray-400 rounded-lg" />
              <FaLinkedinIn className="bg-gray-300 h-10 w-10 p-1 border border-gray-400 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 mx-[5%] mt-4"></div>
      <div className="text-center py-3">
        <small>&copy; 2023 Skillbridge. All rights reserved.</small>
      </div>
    </div>
  );
}

export default Footer;
