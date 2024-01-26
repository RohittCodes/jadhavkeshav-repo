import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const routes = [
    {
      title: "HOME",
      href: "#home",
    },
    {
      title: "SKILLS",
      href: "#skills",
    },
    {
      title: "PROJECTS",
      href: "#projects",
    },
    {
      title: "CONTACT",
      href: "#contact",
    },
  ];

  // const socialRoutes = [
  //   {
  //     href: "https://www.github.com/rohittcodes/",
  //     Icon: FaGithub,
  //   },
  //   {
  //     href: "https://www.twitter.com/rohittcodes/",
  //     Icon: FaTwitter,
  //   },
  //   {
  //     href: "https://www.instagram.com/rohittcodes/",
  //     Icon: FaInstagram,
  //   },
  // ];
  return (
    <div className="h-[56px] fixed w-full bg-black text-white px-4 shadow-sm shadow-slate-200/20">
      <div className="flex h-full justify-between items-center">
        <div className="font-bold">
          <img src={Logo} height={42} width={100} />
        </div>
        <div className="flex gap-4">
          {routes.map((route, index) => (
            <li
              className="flex flex-col text-xs hover:text-blue-800 list-none"
              key={index}
            >
              <a className="" href={route.href}>
                {route.title}
                <div className="hover:bg-blue-800 h-[2px] w-5" />
              </a>
            </li>
          ))}
        </div>
        <div>
          <button className="px-4 py-2 bg-indigo-700 text-sm font-semibold rounded-lg">
            Download CV
          </button>
        </div>
        {/* <div className="flex gap-2">
          {socialRoutes.map((route) => (
            <a href={route.href} target="_blank">
              <route.Icon />
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
