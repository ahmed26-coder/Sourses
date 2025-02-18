import { GiElectric } from "react-icons/gi";
import { useState } from "react";
import { FaCrown } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import logo1 from "../assets/Logo1.svg";
import logo2 from "../assets/Logo2.svg";
import logo3 from "../assets/Logo3.svg";
import logo4 from "../assets/Logo4.svg";
import logo5 from "../assets/Logo5.svg";
import logo6 from "../assets/Logo6.svg";
import logo7 from "../assets/Logo7.svg";
import vedio from "../assets/vedio.png";
import { DataCard } from "../Constants"
import { DataPeeple } from "../Constants"
import { DataCourses } from "../Constants"
import { DataPlans } from "../Constants"

function Home() {
  const [active, setActive] = useState("monthly");
  

  return (
    <div className=" bg-White2 px-5 py-4">
      <div className="relative md:py-5 md:px-8 py-2 px-4 rounded-sm bg-white md:rounded-2xl w-fit mx-auto flex items-center justify-center text-sm md:text-3xl font-bold">
        <FaCrown className="text-Orange -rotate-43 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
        <h1 className="flex items-center rounded-md text-center">
          <GiElectric className="bg-icon w-8 md:w-10 p-1 h-8 md:h-10 mr-2" />
          <span className="text-Orange mr-2">Unlock</span>Your Creative
          Potential
        </h1>
      </div>

      <h2 className="text-center text-lg sm:text-xl md:text-3xl mt-3 font-bold">
        with Online Design and Development Courses.
      </h2>

      <p className="text-center mt-1.5 text-sm sm:text-base md:text-lg">
        Learn from Industry Experts and Enhance Your Skills.
      </p>

      <div className="space-x-4 flex justify-center mt-10">
        <button className="px-4 py-2 bg-Orange rounded-md text-white text-sm sm:text-base md:text-lg">
          Explore Courses
        </button>
        <button className="px-4 py-2 bg-white rounded-md text-sm sm:text-base md:text-lg border border-gray-200">
          View Pricing
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-10 py-5 bg-white rounded-md mt-10 mx-5 md:mx-10">
  <img className="w-[15%] md:w-[10%] sm:w-[20%]" src={logo1} alt="" />
  <img className="w-[15%] md:w-[10%] sm:w-[20%]" src={logo2} alt="" />
  <img className="w-[15%] md:w-[10%] sm:w-[20%]" src={logo3} alt="" />
  <img className="w-[15%] md:w-[10%] sm:w-[20%] md:block" src={logo4} alt="" />
  <img className="w-[15%] md:w-[10%] sm:w-[20%] md:block" src={logo5} alt="" />
  <img className="w-[15%] md:w-[10%] sm:w-[20%] md:block" src={logo6} alt="" />
  <img className="w-[15%] md:w-[10%] sm:w-[20%] md:block" src={logo7} alt="" />
</div>


      <img className=" w-[70%] mt-[5%] flex mx-auto" src={vedio} alt="video" />
      <h1 className="text-4xl px-[5%] font-bold mt-15">Benefits</h1>
      <div className="flex flex-col sm:flex-row px-[5%] justify-between">
        <p className="text-lg md:w-[80%] sm:w-full mt-1 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <button className="bg-white px-4 py-2 rounded-md border-1 mr-[70%] md:mr-[0%]  border-gray-200 mt-4 sm:mt-0">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:mx-[7%] mt-10 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {DataCard.map((item) => (
          <article
            key={item.id}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h1 className="text-5xl self-end font-bold mb-5">{item.number}</h1>
            <h4 className="text-xl font-semibold text-gray-800 ">
              {item.title}
            </h4>
            <p className="text-gray-600 mt-2 mb-5">{item.dish}</p>
            <FiArrowUpRight className="text-4xl text-Orange bg-gray-100 border-1 rounded-md border-gray-200 mt-auto self-end cursor-pointer transition-transform duration-300 hover:translate-x-1" />
          </article>
        ))}
      </div>
      <h1 className="text-4xl px-[5%] font-bold mt-15">Our Courses</h1>
      <div className="flex flex-col sm:flex-row px-[5%] justify-between">
        <p className="text-lg md:w-[80%] sm:w-full mt-1 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <button className="bg-white px-4 py-2 rounded-md border-1 mr-[70%] md:mr-[0%]  border-gray-200 mt-4 sm:mt-0">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 mt-[3%] md:mx-[10%]">
        {DataCourses.map((item) => (
          <article
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden "
          >
            <div className="relative bg-white px-4 pt-4 ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <div className=" space-x-3">
                  <small className=" border-1 border-gray-300 px-2 py-1 rounded">
                    {item.time}
                  </small>
                  <small className=" border-1 border-gray-300 px-2 py-1 rounded">
                    {item.type}
                  </small>
                </div>
                <h6 className="text-base font-semibold text-gray-700">
                  {item.owner}
                </h6>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mt-5">
                {item.title}
              </h2>
              <p className="text-gray-600 my-2">{item.dish}</p>
              <button className="w-full flex justify-center bg-White2 px-4 my-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition">
                {item.button}
              </button>
            </div>
          </article>
        ))}
      </div>
      <h1 className="text-4xl px-[5%] font-bold mt-15">Our Testimonials</h1>
      <div className="flex flex-col sm:flex-row px-[5%] justify-between">
        <p className="text-lg md:w-[80%] sm:w-full mt-1 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <button className="bg-white px-4 py-2 rounded-md border-1 mr-[70%] md:mr-[0%]  border-gray-200 mt-4 sm:mt-0">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 md:mx-[5%] mt-[4%]">
        {DataPeeple.map((item) => (
          <article
            key={item.id}
            className="bg-White2/95 shadow-md rounded-xl flex flex-col text-center "
          >
            <p className="bg-white text-gray-700 text-lg font-medium p-4 rounded-lg mb-4">
              {item.dish}
            </p>
            <div className=" w-full border-t bg-white border-gray-300 mb-4"></div>
            <div className="flex justify-between pb-4 px-[5%] ">
              <div className="flex gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-2xl object-cover"
                />
                <h5 className="text-xl mt-3 font-semibold text-gray-800">
                  {item.name}
                </h5>
              </div>
              <button className="bg-white px-4 py-1 rounded-lg text-base border-1 border-gray-300 font-semibold">
                {item.button}
              </button>
            </div>
          </article>
        ))}
      </div>
      <h1 className="text-4xl px-[5%] font-bold mt-15">Our Pricing</h1>
      <div className="flex flex-col sm:flex-row px-[5%] justify-between">
        <p className="text-lg md:w-[80%] sm:w-full mt-1 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <div className="flex gap-5 mx-auto md:mx-0 mt-3 bg-white p-2 rounded-2xl">
          <h4
            className={`cursor-pointer ${
              active === "monthly"
                ? "bg-orange-500 text-white py-2 px-5 rounded-lg"
                : "bg-white text-black py-2 px-5 rounded-lg"
            }`}
            onClick={() => setActive("monthly")}
          >
            Monthly
          </h4>
          <h4
            className={`cursor-pointer ${
              active === "yearly"
                ? "bg-orange-500 text-white py-2 px-5 rounded-lg"
                : "bg-white text-black py-2 px-5 rounded-lg"
            }`}
            onClick={() => setActive("yearly")}
          >
            Yearly
          </h4>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-[4%] rounded-2xl bg-white py-10 px-2 md:px-10 md:mx-[10%]">
        {DataPlans.map((item) => {
          console.log("Item ID:", item.id);
          return (
            <article key={item.id} className=" bg-White2 rounded-lg">
              <h5 className=" mt-5 mx-5 bg-Orange2 py-2 text-center text-lg">
                {item.type}
              </h5>
              <h1 className=" text-6xl font-bold flex items-center justify-center my-[3%]">
                {item.title}
                <p className=" text-lg font-normal mt-7">/month</p>
              </h1>
              <div className=" bg-white mx-[4%] mb-[4%] rounded-lg">
                <h4 className=" font-bold text-center pt-5">{item.title2}</h4>
                <p className=" flex mt-5 pl-5 items-center border-1 rounded-lg border-gray-300 mx-[6%] py-3">
                  <IoMdCheckmark className=" w-7 rounded-md h-7 p-1 mr-2 bg-Orange2" />{" "}
                  {item.dish1}
                </p>
                <p className=" flex mt-4 pl-5 items-center border-1 rounded-lg border-gray-300 mx-[6%] py-3">
                  <IoMdCheckmark className=" w-7 rounded-md h-7 p-1 mr-2 bg-Orange2" />
                  {item.dish2}
                </p>
                <p className=" flex mt-4 pl-5 items-center border-1 rounded-lg border-gray-300 mx-[6%] py-3">
                  <IoMdCheckmark className=" w-7 rounded-md h-7 p-1 mr-2 bg-Orange2" />
                  {item.dish3}
                </p>
                <p className=" flex mt-4 pl-5 items-center border-1 rounded-lg border-gray-300 mx-[6%] py-3">
                  <IoMdCheckmark className=" w-7 rounded-md h-7 p-1 mr-2 bg-Orange2" />
                  {item.dish4}
                </p>
                <p className=" flex mt-4 pl-5 items-center border-1 rounded-lg border-gray-300 mx-[6%] py-3">
                  <IoMdCheckmark className=" w-7 rounded-md h-7 p-1 mr-2 bg-Orange2" />
                  {item.dish5}
                </p>
                <p className=" flex mt-4 pl-5 items-center border-1 rounded-lg border-gray-300 mx-[6%] py-3">
                  {String(item.id) === "1" ? (
                    <AiOutlineClose className=" w-7 rounded-md h-7 p-1 mr-2 border-1 border-gray-300" />
                  ) : (
                    <IoMdCheckmark className=" w-7 rounded-md h-7 p-1 mr-2 bg-Orange2" />
                  )}
                  {item.dish6}
                </p>
                <p className=" flex mt-4 pl-5 items-center border-1 rounded-lg border-gray-300 mx-[6%] py-3">
                  {String(item.id) === "1" ? (
                    <AiOutlineClose className=" w-7 rounded-md h-7 p-1 mr-2 border-1 border-gray-300" />
                  ) : (
                    <IoMdCheckmark className=" w-7 rounded-md h-7 p-1 mr-2 bg-Orange2" />
                  )}
                  {item.dish7}
                </p>
                <button className=" text-center mt-3 py-2 text-lg bg-Orange text-white rounded-b-lg w-full">
                  {item.button}
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <div className=" mt-[5%] md:mx-[5%] rounded-lg p-[5%] bg-white md:flex grid grid-cols-1">
        <div className="">
          <h1 className=" text-4xl w-[60%] mb-3 font-bold">
            Frequently Asked Questions
          </h1>
          <p className=" text-lg text-gray-600 w-[60%]">
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
          <button className=" mt-5 border-1 border-gray-300 rounded-lg py-2 px-4">
            See All FAQ&#39;s
          </button>
        </div>
        <div className=" mt-10 md:mt-0">
          <div className=" border-1 border-gray-200 rounded-lg p-[5%]">
            <div className=" flex justify-between mb-2 mx-[5%] text-lg ">
              <h5>Can I enroll in multiple courses at once?</h5>
              <AiOutlineClose className=" bg-Orange2 p-1 w-8 rounded-lg h-8" />
            </div>
            <div className="border-1 border-gray-200 mx-[5%] mb-2"></div>
            <p className=" text-gray-600">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
            <div className=" mt-[4%] rounded-lg py-3 px-5 bg-White2 flex justify-between">
              <h5 className=" pt-2">
                Enrollment Process for Different Courses
              </h5>
              <AiOutlineArrowRight className=" text-2xl bg-white p-1 w-10 h-10 rounded-full " />
            </div>
          </div>
          <div className=" border-1 border-gray-200 text-lg rounded-lg mt-[3%] flex py-3 px-[5%] justify-between">
            <h5>What kind of support can I expect from instructors?</h5>
            <IoAddOutline className=" bg-Orange2 w-8 h-8 p-1 rounded-lg " />
          </div>
          <div className=" border-1 border-gray-200 text-lg rounded-lg mt-[3%] flex py-3 px-[5%] justify-between">
            <h5>
              Are the courses self-paced or do they have specific start and end
              dates?
            </h5>
            <IoAddOutline className=" bg-Orange2 w-8 h-8 p-1 rounded-lg mt-3 " />
          </div>
          <div className=" border-1 border-gray-200 text-lg rounded-lg mt-[3%] flex py-3 px-[5%] justify-between">
            <h5>Are there any prerequisites for the courses?</h5>
            <IoAddOutline className=" bg-Orange2 w-8 h-8 p-1 rounded-lg " />
          </div>
          <div className=" border-1 border-gray-200 text-lg rounded-lg mt-[3%] flex py-3 px-[5%] justify-between">
            <h5>Can I download the course materials for offline access?</h5>
            <IoAddOutline className=" bg-Orange2 w-8 h-8 p-1 rounded-lg " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
