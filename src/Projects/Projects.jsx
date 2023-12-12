import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="my-10">
      <div className="flex justify-center items-center flex-col gap-y-3">
        <h1 className="text-4xl text-center font-bold">My Projects</h1>
        <p className="text-center text-xl font-normal">
          Here are some projects I have build.
        </p>
        <img src="../../public/line.png" alt="" />
      </div>
      {/* Project 1 */}

      <div className=" rounded">
        <div className="  mx-auto hero min-h-screen bg-base-200">
          <div className="hero-content flex flex-col md:flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/bmMjDXW/p1.png"
              className="max-w-xs md:max-w-md lg:max-w-xl rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-4xl mb-2 font-bold">BengalBreeze</h1>
              <h1 className="text-xl font-bold">A Real Estate Company</h1>
              <p className="py-6">
                BengalBreeze is a premier real estate platform dedicated to
                providing a seamless and enriching experience for individuals
                seeking their dream homes. Our platform brings together a
                curated selection of stylish homes in prime locations, offering
                a blend of comfort, convenience, and affordability.
              </p>
              <div className="flex justify-center">
                <Link to="https://bengal-breeze.web.app/" target="_blank">
                  {" "}
                  <button className="btn text-teal-600 my-4">Live Link</button>
                </Link>
                <Link
                  to="https://github.com/saad7mahmud/BengalBreeze-Client-Side"
                  target="_blank"
                >
                  <button className="btn text-teal-600 my-4">
                    Client Code
                  </button>
                </Link>
                <Link
                  to="https://github.com/saad7mahmud/BengalBreeze-Server-Side"
                  target="_blank"
                >
                  <button className="btn text-teal-600 my-4 ">
                    Server Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded">
        <div className="  mx-auto hero min-h-screen bg-base-200">
          <div className="hero-content flex flex-col md:flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/pbp6xcy/p2.png"
              className="max-w-xs md:max-w-md lg:max-w-xl rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-4xl mb-2 font-bold">Zero Hunger</h1>
              <h1 className="text-xl font-bold">
                A Community Food Sharing Platform.
              </h1>
              <p className="py-6">
                Zero Hunger is a community-driven food sharing platform
                dedicated to reducing food waste, alleviating hunger, and
                fostering a sense of communal responsibility. The app strives to
                create a world where surplus food is shared among community
                members, ensuring that everyone has access to nutritious meals.
              </p>
              <div className="flex justify-center">
                <Link to="https://zero-hunger-80734.web.app/" target="_blank">
                  {" "}
                  <button className="btn text-teal-600 my-4">Live Link</button>
                </Link>
                <Link
                  to="https://github.com/saad7mahmud/ZeroHunger-Client-Side"
                  target="_blank"
                >
                  <button className="btn text-teal-600 my-4">
                    Client Code
                  </button>
                </Link>
                <Link
                  to="https://github.com/saad7mahmud/ZeroHunger-Server-Side"
                  target="_blank"
                >
                  <button className="btn text-teal-600 my-4 ">
                    Server Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded">
        <div className="  mx-auto hero min-h-screen bg-base-200">
          <div className="hero-content flex flex-col md:flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/619d03Q/p3.png"
              className="max-w-xs md:max-w-md lg:max-w-xl rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-4xl mb-2 font-bold">Tech Valley</h1>
              <h1 className="text-xl font-bold">A E-Commerce Website</h1>
              <p className="py-6">
                Tech Valley stands as your premier destination for cutting-edge
                technology. Explore our curated collection of top-tier mobiles,
                laptops, and accessories to enhance your digital lifestyle.
                Immerse yourself in the pinnacle of innovation with TechValley.
              </p>
              <div className="flex justify-center">
                <Link to="https://tech-valley-a10.web.app/" target="_blank">
                  {" "}
                  <button className="btn text-teal-600 my-4">Live Link</button>
                </Link>
                <Link
                  to="https://github.com/saad7mahmud/TechValley-Client-Side"
                  target="_blank"
                >
                  <button className="btn text-teal-600 my-4">
                    Client Code
                  </button>
                </Link>
                <Link
                  to="https://github.com/saad7mahmud/TechValley-Server-Side"
                  target="_blank"
                >
                  <button className="btn text-teal-600 my-4 ">
                    Server Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
