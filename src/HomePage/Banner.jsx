import { FaDownload } from "react-icons/fa";

const Banner = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "../../public/resume on progress.pdf"; // Adjust the path to your PDF file
    downloadLink.download = "resume.pdf"; // You can set the downloaded file name
    downloadLink.click();
  };
  return (
    <div>
      <div className=" flex flex-col md:flex-row lg:flex-row justify-center items-center ">
        <div className="w-1/2 flex justify-center items-center">
          <img
            className="w-3/4"
            src="https://i.ibb.co/311Wnbp/Saad-Image-frame.png"
            alt=""
          />
        </div>
        <div className="w-1/2 gap-y-3 flex flex-col">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
            Saad Mahmud
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
            <span className="text-teal-600">MERN</span> Stack Developer
          </h1>
          <p>
            I am an enthusiastic Junior Full Stack Web Developer specializing in{" "}
            <span className="text-teal-600">
              MongoDB, Express.js, React, Node.js
            </span>
          </p>

          <button
            onClick={handleDownload}
            className="btn text-teal-600 my-4 w-52"
          >
            <FaDownload />
            Donwload Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
