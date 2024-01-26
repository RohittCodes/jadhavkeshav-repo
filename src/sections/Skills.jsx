import React from "react";
import { AppWrap, MotionWrap } from "../wrapper";
import JavaScript from "../assets/javascript.svg";
import ReactIcon from "../assets/react.svg";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      image: JavaScript,
      title: "JavaScript",
    },
    {
      image: ReactIcon,
      title: "React JS",
    },
    {
      image: ReactIcon,
      title: "React JS",
    },
    {
      image: ReactIcon,
      title: "React JS",
    },
    {
      image: ReactIcon,
      title: "React JS",
    },
  ];
  return (
    <div className="h-screen px-8 flex flex-col justify-center">
      <div className="pt-[56px]">
        <h2 className="mt-10 text-4xl font-bold text-center">
          Skills & Experiences
        </h2>
      </div>
      <div className="h-[90%] w-full flex justify-between items-center">
        <div className="ml-32 grid grid-cols-3 justify-center gap-8">
          {skills.map((skill) => (
            <motion.div
              className="bg-slate-100 flex items-center w-18 h-18 rounded-full p-4 hover:shadow-2xl shadow-white"
              whileHover={{ scale: 1.1 }}
              animate={{ transition: 1 }}
            >
              <img
                src={skill.image}
                alt={skills[0].title}
                className="h-10 w-10"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col w-1/2">Some Experiences here</div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills), "skills");
