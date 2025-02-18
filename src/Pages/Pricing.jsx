import { useState } from "react";
import { DataPlans } from "../Constants";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";

function Pricing() {
  const [active, setActive] = useState("monthly");
  return (
    <div className=" bg-White2 pb-[5%]">
      <div className="flex flex-col sm:flex-row justify-between px-[5%] pt-[4%]">
        <h1 className="md:text-4xl text-3xl px-[5%] font-bold pt-15">Our Pricings</h1>
        <p className="md:text-lg text-sm  md:w-[50%] sm:w-full mt-1 text-gray-700">
            Welcome to SkillBridge&#39;s Pricing Plan page, where we offer two
            comprehensive options to cater to your needs: Free and Pro. We believe
            in providing flexible and affordable pricing options for our services.
            Whether you&#39;re an individual looking to enhance your skills or a
            business seeking professional development solutions, we have a plan that
            suits you. Explore our pricing options below and choose the one that
            best fits your requirements.
        </p>
      </div>
      <div className="flex gap-5 mx-auto w-fit mt-10 mb-[10%] md:mb-[0%] bg-white p-2 rounded-2xl">
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
      <div className=" mt-[5%] md:mx-[10%] rounded-lg p-[5%] bg-white md:flex grid grid-cols-1">
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

export default Pricing;
