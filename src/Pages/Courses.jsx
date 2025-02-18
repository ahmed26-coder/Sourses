import { DataCourse } from "../Constants";


function Courses() {
  return (
    <div className=" bg-White2 px-5 py-5">
      <div className="flex flex-col sm:flex-row justify-between px-[5%] pt-[4%]">
        <h1 className="md:text-4xl text-2xl md:px-[5%] font-bold">
          Online Courses on Design and Development
        </h1>
        <p className="md:text-lg text-sm  md:w-[50%] sm:w-full mt-1 text-gray-700">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 p-[5%]">
  {DataCourse.map((item) => (
    <article key={item.id} className="bg-white rounded-lg md:p-10">
      <div className="md:flex grid grid-cols-1 items-center m-5">
        <div>
          <h2 className="md:text-2xl text-lg font-bold text-gray-800">{item.title}</h2>
          <p className="text-gray-600 md:w-[95%]">{item.dish}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="text-black w-32 py-2 bg-White2 border-1 border-gray-300 rounded-md hover:bg-gray-200">
            {item.button}
          </button>
        </div>
      </div>

      <div className="flex md:gap-10 gap-2 justify-center mt-5">
        <img src={item.img1} alt={item.title} className="w-[30%] md:w-[30%] rounded-md" />
        <img src={item.img2} alt={item.title} className="w-[30%] md:w-[30%] rounded-md" />
        <img src={item.img3} alt={item.title} className="w-[30%] md:w-[30%] rounded-md" />
      </div>

      <div className="md:flex md:justify-between grid grid-cols-1 py-4 px-5 md:p-10">
        <div className="flex gap-5">
          <p className="bg-White2 border-1 border-gray-300 rounded-lg py-1 px-2 text-sm md:text-lg">{item.time}</p>
          <p className="bg-White2 border-1 border-gray-300 rounded-lg py-1 px-2 text-sm md:text-lg">{item.type}</p>
        </div>
        <h5 className="font-semibold mt-2 text-lg">{item.owner}</h5>
      </div>

      <div className="p-5 border-1 border-gray-300 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800">{item.type2}</h3>
        <div className="border-1 border-gray-200 my-[2%]"></div>
        <div className="md:flex grid grid-cols-1 gap-4 mt-4">
          <div className="p-4 rounded-lg md:mx-auto">
            <h2 className="font-bold text-5xl">{item.number1}</h2>
            <p className="text-lg pt-[2%]">{item.typenumber1}</p>
          </div>
          <div className="p-4 rounded-lg md:mx-auto">
            <h2 className="font-bold text-5xl">{item.number2}</h2>
            <p className="text-lg pt-[2%]">{item.typenumber2}</p>
          </div>
          <div className="p-4 rounded-lg md:mx-auto">
            <h2 className="font-bold text-5xl">{item.number3}</h2>
            <p className="text-lg pt-[2%]">{item.typenumber3}</p>
          </div>
          <div className="p-4 rounded-lg md:mx-auto">
            <h2 className="font-bold text-5xl">{item.number4}</h2>
            <p className="text-lg pt-[2%]">{item.typenumber4}</p>
          </div>
          <div className="p-4 rounded-lg md:mx-auto">
            <h2 className="font-bold text-5xl">{item.number5}</h2>
            <p className="text-lg pt-[2%]">{item.typenumber5}</p>
          </div>
        </div>
      </div>
    </article>
  ))}
</div>


    </div>
  );
}

export default Courses;
