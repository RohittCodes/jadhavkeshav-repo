import React from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import Avatar from "../assets/avatar-bg.png";

const About = () => {
  return (
    <div className="h-screen pt-[56px] w-full">
      <div className="flex flex-col items-center justify-between h-full w-full -z-10 [background:radial-gradient(45%_38%_at_50%_65%,#4845b6_15%,#000_100%)]">
        <div className="flex flex-col items-center text-4xl font-semibold py-8 px-32">
          <h1 className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            neque egestas congue quisque egestas diam.
          </h1>
        </div>
        <div className="flex w-full gap-4 justify-center ">
          <div className="flex flex-col justify-start mt-32 h-fit px-4 py-2 bg-black rounded-xl shadow-sm shadow-slate-400">
            <h2 className="text-md font-bold">Lorem Ipsum</h2>
            <p className="text-sm text-center font-medium text-gray-300">
              2 years
            </p>
          </div>
          <img src={Avatar} alt="avatar" className="h-96 w-96 m-0" />
          <div className="mt-44 h-fit px-4 py-2 bg-black rounded-xl shadow-sm shadow-slate-400">
            <h2 className="text-lg font-bold">Lorem Ipsum</h2>
            <p className="text-sm text-center font-medium text-gray-300">
              5 years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About), "home");
