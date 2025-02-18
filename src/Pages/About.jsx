import { DataAbout } from "../Constants"
import { DataSarvisec } from "../Constants"
import aboutimg from "../assets/aboutimg.png"

function About() {


    
  return (
    <div className=" bg-White2 px-5 py-4">
      <div className=" md:flex md:justify-between md:px-[6%] px-[3%] pt-[2%]">
        <h1 className=" md:text-4xl text-2xl mb-3 md:mb-0 font-bold">About Skillbridge</h1>
        <p className=" md:text-lg text-sm text-gray-600 md:w-[50%]">Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
      </div>
      <div className=" border-1 border-gray-200 my-[3%]"></div>
      <div className=" md:px-[6%] px-[3%] pt-[2%]">
        <h1 className=" md:text-4xl text-2xl md:mb-0 font-bold">Achievements</h1>
        <p className=" md:text-lg text-sm text-gray-600 pt-2">Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 mt-[4%] md:mx-[5%]">
        {DataAbout.map((item) => (
          <article key={item.id} className=" bg-white rounded-lg p-6">
            <div className=" h-10 w-10 text-3xl flex justify-center items-center rounded-md border-1 border-Orange p-1 bg-Orange2 text-Orange">
            {item.icon}
            </div>
            <h3 className=" text-lg  font-semibold my-[2%]">{item.title}</h3>
            <p className=" text-gray-700">{item.dish}</p>
          </article>
        ))}
      </div>
      <div className=" md:px-[6%] px-[3%] pt-[2%]">
        <h1 className=" md:text-4xl text-2xl font-bold">Our Goals</h1>
        <p className=" md:text-lg text-sm text-gray-600 pt-2">At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to</p>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 mt-[4%] md:mx-[5%]">
        {DataSarvisec.map((item) => (
          <article key={item.id} className=" bg-white rounded-lg p-6">
            <div className=" h-10 w-10 text-3xl flex justify-center items-center rounded-md border-1 border-Orange p-1 bg-Orange2 text-Orange">
            {item.icon}
            </div>
            <h3 className=" text-lg  font-semibold my-[2%]">{item.title}</h3>
            <p className=" text-gray-700">{item.dish}</p>
          </article>
        ))}
      </div>
      <div className=" bg-white grid grid-cols-1 pt-[3%] md:pt-[0%]  md:flex my-[4%] px-[4%] mx-[5%] rounded-lg">
        <div className=" my-auto">
          <h1 className=" md:text-4xl text-2xl font-bold"><span className="text-Orange">Together</span> , let&#39;s shape the future of digital innovation</h1>
          <p className=" text-gray-600 md:text-lg text-sm pt-[1%]">Join us on this exciting learning journey and unlock your potential in design and development.</p>
        </div>
        <div className=" md:flex-row-reverse px-[3%] md:px-[0%] flex mt-4 md:mt-0  ">
          <button className=" bg-Orange text-white w-24 h-fit my-auto py-2 rounded-lg">Join Now</button>
          <img className="w-[70%]" src={aboutimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
