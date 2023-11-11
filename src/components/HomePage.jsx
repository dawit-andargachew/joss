import React from "react";

const HomePage = () => {
  return (
    <section className="flex p-1 justify-around items-center">
      <div className=" w-5/12 ">
        <p className="text-primary font-bold text-[56px]">
          Harmony in Learning{" "}
        </p>
        <p className="font-bold text-[50px]">Uniting Curiosity and Knowledge</p>

        <p className="text-text_gray my-3 ">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>

        <div className="flex my-5 gap-6">
          <button className="bg-primary rounded-md px-6 py-2 text-white">
            Explore
          </button>
          <button className="text-watch_video shadow-md px-5  rounded-lg py-2">
            Watch Video
          </button>
        </div>
      </div>
      <div className="w-5/12 px-8 py-3 outline outline-[1px] outline-gray-400 rounded-md">
        <img src="/home.svg" alt="landing page image" />
      </div>
    </section>
  );
};

export default HomePage;
