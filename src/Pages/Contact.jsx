import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <div className=" bg-White2 p-5">
      <div className="flex flex-col sm:flex-row justify-between px-[5%] pt-[4%]">
        <h1 className="md:text-4xl text-3xl md:px-[5%] font-bold md:pt-15">
          Contact Us
        </h1>
        <p className="md:text-lg text-sm  md:w-[50%] sm:w-full mt-1 text-gray-700">
          Welcome to SkillBridge&#39;s Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you&#39;re an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>
      <div className="bg-white mt-[5%] rounded-lg mx-[3%] p-3 md:p-10 flex flex-col md:flex-row">
  <div className="w-full md:w-[70%]">
    <form action="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-700">First Name</h3>
          <input
            className="bg-gray-100 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-700">Last Name</h3>
          <input
            className="bg-gray-100 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-700">Email</h3>
          <input
            className="bg-gray-100 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
          <input
            className="bg-gray-100 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter Phone Number"
          />
        </div>
      </div>

      <div className="flex flex-col mt-5">
        <h3 className="text-lg font-semibold text-gray-700">Subject</h3>
        <input
          className="bg-gray-100 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your Subject"
        />
      </div>
      <div className="flex flex-col mt-5">
        <h3 className="text-lg font-semibold text-gray-700">Message</h3>
        <textarea
          className="bg-gray-100 w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="12"
          placeholder="Enter your Message here..."
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button className="bg-Orange text-white px-5 py-2 rounded-lg mt-8">
          Send Your Message
        </button>
      </div>
    </form>
  </div>
  <div className="hidden md:block border border-gray-300 mx-[4%]"></div>
  <div className="w-full md:w-[30%] space-y-5 mt-10 md:mt-10">
    <div className="bg-gray-100 w-full border border-gray-300 py-6 px-10 rounded-lg">
      <MdEmail className="text-2xl bg-gray-300 border border-gray-500 mx-auto w-10 p-2 h-10 rounded-lg" />
      <p className="text-lg text-center mt-2 text-gray-800">
        support@skillbridge.com
      </p>
    </div>
    <div className="bg-gray-100 w-full border border-gray-300 py-6 px-10 rounded-lg">
      <FaPhone className="text-2xl bg-gray-300 border border-gray-500 mx-auto w-10 p-2 h-10 rounded-lg" />
      <p className="text-lg text-center mt-2 text-gray-800">+91 00000 00000</p>
    </div>
    <div className="bg-gray-100 w-full border border-gray-300 py-6 px-10 rounded-lg">
      <FaLocationDot className="text-2xl bg-gray-300 border border-gray-500 mx-auto w-10 p-2 h-10 rounded-lg" />
      <p className="text-lg text-center mt-2 text-gray-800">
        Some Where in the World
      </p>
    </div>
    <div className="bg-gray-100 w-full border border-gray-300 mx-auto py-6 px-10 rounded-lg">
      <div className="flex gap-5 text-4xl justify-center mb-2">
        <FaFacebook className="text-2xl bg-gray-300 border border-gray-500 mx-auto w-10 p-2 h-10 rounded-lg" />
        <FaLinkedin className="text-2xl bg-gray-300 border border-gray-500 mx-auto w-10 p-2 h-10 rounded-lg" />
        <FaInstagramSquare className="text-2xl bg-gray-300 border border-gray-500 mx-auto w-10 p-2 h-10 rounded-lg" />
      </div>
      <p className="text-center text-lg text-gray-800">Social Profiles</p>
    </div>
  </div>
</div>

    </div>
  );
}

export default Contact;
