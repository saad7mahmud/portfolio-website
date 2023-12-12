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
        <div className="w-[50%]">
          <img
            className="w-3/4"
            src="../../public/Saad Image frame.png"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
            Saad Mahmud
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            MERN Stack Developer
          </h1>
          <button
            onClick={handleDownload}
            className="btn btn-ghost btn-active my-4"
          >
            Donwload Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
