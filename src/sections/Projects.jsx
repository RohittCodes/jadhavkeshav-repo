import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import { MotionConfig, easeIn, motion } from "framer-motion";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "Something",
    },
    {
      title: "Something1",
    },
    {
      title: "Something2",
    },
    {
      title: "Something3",
    },
    {
      title: "Something4",
    },
    {
      title: "Something5",
    },
  ];

  const onPrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const onNextClick = () => {
    if (currentIndex < data.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="h-screen px-8 justify-center">
      <div className="h-[56px] mb-10" />
      <h1 className="text-center text-4xl font-semibold">Some Projects</h1>
      <div className="flex px-10 h-[80%] items-center">
        <div></div>
        <MotionConfig transition={{ duration: 0.3, ease: easeIn }}>
          <button
            onClick={onPrevClick}
            className="bg-indigo-700 rounded-full flex items-center"
          >
            <MdNavigateBefore />
          </button>
          <div className="flex flex-nowrap gap-8 mx-4 overflow-auto w-full h-2/3">
            {[...data].map((item) => (
              <motion.div
                className="aspect-[4/5] border-[1px] rounded-md flex flex-col px-2 py-2"
                animate={{
                  x: `-${currentIndex * 24}rem`,
                }}
              >
                <div>
                  <img
                    src="https://cdn.sanity.io/images/tckcabm9/production/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png"
                    alt="some image"
                  />
                  <div className="hidden hover:visible">Something</div>
                </div>
                {item.title}
              </motion.div>
            ))}
          </div>
          <button
            onClick={onNextClick}
            className="bg-indigo-700 rounded-full flex items-center"
          >
            <MdNavigateNext />
          </button>
        </MotionConfig>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Projects), "projects");
