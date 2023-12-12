const Timeline = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-y-3">
        <h1 className="text-4xl text-center font-bold">Education</h1>
        <p className="text-center text-xl font-normal">
          Throughout the phases I am continuing my study.
        </p>
        <img src="../../public/line.png" alt="" />
      </div>
      <div className="max-w-4xl mx-auto p-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className=" ">2021-Ongoing</time>
              <p className=" ">Under-graduation</p>
              <div className="text-lg font-black mb-3">University of Dhaka</div>
              Since 2021, I have been actively engaged in pursuing my
              undergraduate studies at the University of Dhaka, specifically in
              the Department of Criminology. This marks a significant chapter in
              my academic and professional journey, as I delve into the
              interdisciplinary field of criminology.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:text-start mb-10">
              <time className=" ">2020</time>
              <p className=" ">Higher Secondary Education</p>
              <div className="text-lg font-black mb-3">
                Saint Joseph College, Dhaka
              </div>
              In 2020, I successfully completed my higher secondary education,
              marking a pivotal chapter in my academic journey. This phase of my
              education was characterized by a more specialized and in-depth
              exploration of subjects, providing me with a deeper understanding
              of various disciplines.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className=" ">2018</time>
              <p className=" ">Secondary Education</p>
              <div className="text-lg font-black mb-3">
                Baj Para High School
              </div>
              In 2018, I completed my secondary education, marking a significant
              milestone in my academic journey. This period provided a
              foundation for my educational pursuits, equipping me with
              essential knowledge and skills.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
