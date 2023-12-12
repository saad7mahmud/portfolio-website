import { Link } from "react-router-dom";

const Experiences = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-y-3">
        <h1 className="text-4xl text-center font-bold">Experiences</h1>
        <p className="text-center text-xl font-normal">
          I have a deep experience on EdTech
        </p>
        <img src="../../public/line.png" alt="" />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            className="w-1/3 m-10"
            src="https://i.ibb.co/ZKNjWn2/POS-LOGO.png"
          />
          <div>
            <h1 className="">2021-Ongoing</h1>
            <h1 className="text-2xl font-bold">Co-Founder & Head of IT,</h1>
            <h1 className="text-3xl font-bold">
              Physics of Stupid | EdTech Platform
            </h1>
            <p className="py-6">
              As the Co-Founder and Head of IT at Physics of Stupid, an EdTech
              platform, I have been leading our team since 2021. It is a
              privilege to contribute to the education of 400,000 students. Our
              commitment to excellence and innovation drives us to create a
              dynamic learning environment for students across the country.
            </p>
            <Link to="https://physicsofstupid.com/#AboutUs" target="_blank">
              <button className="btn text-teal-600 my-4 w-52">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
