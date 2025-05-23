import React from "react";

import Contact from "./contact/contact";

import profilePicture from "../../assets/faizan.jpg";
import gitGif from "../../assets/git.gif";
import linkdinGif from "../../assets/linkdin.gif";
import contactIcon from "../../assets/phone.svg";
import mailIcon from "../../assets/mail.svg";
import locationIcon from "../../assets/location.svg";
import calandarIcon from "../../assets/calandar.svg";
import downloadIcon from "../../assets/download.svg";
import cv from "../../assets/cv.pdf";
import "./sideBar.css";

const SideBar = ({ setSelect, select }) => {
  return (
    <div className=" wraper bg-white   p-5 mb-5 w-full 2xl:w-96 rounded-md   flex  flex-col  items-center mr-10 h-max  ">
      {/* /////////////// profile section //////////////// */}
      <div className="p-4 bg-blue-400 rounded-2xl hover:bg-blue-500 ">
        <img
          alt="icon"
          src={profilePicture}
          className="w-40 h-40 rounded-full  "
        />
      </div>
      {/* ////////////////// social Section  ///////////////// */}
      <div className="pt-5 flex flex-col   justify-center items-center">
        <span className="font-bold  text-2xl">Muhammad Faizan</span>
        <span>React Js Developer</span>
        <div className="flex space-x-2 items-center mt-4">
          <a
            href="https://github.com/RajaFaizan55"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="bg-gray-200 p-1 rounded-lg cursor-pointer hover:bg-gray-300 ">
              <img alt="icon" src={gitGif} className="rounded-full w-10 " />
            </div>
          </a>

          <a
            href={"https://www.linkedin.com/in/raja-faizan-3a247a176/"}
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-gray-200 p-1 rounded-lg cursor-pointer  hover:bg-gray-300 ">
              <img alt="icon" src={linkdinGif} className="rounded-full w-10" />
            </div>
          </a>
        </div>
      </div>
      {/* ///////////////// resume section //////////////////// */}
      <div className="border p-3 w-full my-5 rounded-md flex justify-center space-x-4   ">
        <a href="#about-me" rel="noreferrer">
          <div
            className={` ${
              select !== "about" && "hover:bg-gray-300"
            } p-1 px-4 rounded-lg cursor-pointer flex flex-col justify-center items-center   ${
              select === "about" ? "bg-blue-400" : "bg-gray-200"
            }`}
            onClick={() => setSelect("about")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={select === "about" ? 1.5 : 0.8}
              stroke={`${select === "about" ? "white" : "currentColor"} `}
              className="w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span
              className={`text-sm font-bold ${
                select === "about" && "text-white"
              }`}
            >
              About
            </span>
          </div>
        </a>

        <a href="#resume" rel="noreferrer">
          <div
            className={` ${
              select !== "resume" && "hover:bg-gray-300"
            } p-1 px-4 rounded-lg cursor-pointer flex flex-col justify-center items-center  ${
              select === "resume" ? "bg-blue-400" : "bg-gray-200"
            }`}
            onClick={() => setSelect("resume")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={select === "resume" ? 1.5 : 0.8}
              stroke={`${select === "resume" ? "white" : "currentColor"} `}
              className="w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
            <span
              className={`text-sm font-bold ${
                select === "resume" && "text-white"
              }`}
            >
              Resume
            </span>
          </div>
        </a>

        <a href="#what-i-do" rel="noreferrer">
          <div
            className={` ${
              select !== "work" && "hover:bg-gray-300"
            } p-1 px-4 rounded-lg cursor-pointer flex flex-col justify-center items-center ${
              select === "work" ? "bg-blue-400" : "bg-gray-200"
            }`}
            onClick={() => setSelect("work")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={select === "work" ? 1.5 : 0.8}
              stroke={`${select === "work" ? "white" : "currentColor"} `}
              className="w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
            <span
              className={`text-sm font-bold ${
                select === "work" && "text-white"
              }`}
            >
              Work
            </span>
          </div>
        </a>
      </div>

      {/* /////////////////// contact section ////////////// */}
      <div className="border p-5 w-full rounded-md bg-gray-100 ">
        <Contact icon={contactIcon} title={"Phone"} val={"+44 7919106623"} />
        <Contact
          icon={mailIcon}
          title={"Email"}
          val={"rajafaizan8494@gmail.com"}
        />
        <Contact
          icon={locationIcon}
          title={"Location"}
          val={"London, England"}
        />
        <Contact icon={calandarIcon} title={"Birthday"} val={"May 19, 1998"} />
      </div>
      {/* /////////////////// download cv button///////////////// */}
      <a href={cv} target="_blank" rel="noreferrer">
        <div className="bg-blue-400 hover:bg-blue-500 p-2 rounded-md mt-5  flex items-center cursor-pointer ">
          <img alt="icon" src={downloadIcon} className="w-5 mr-3" />
          <button className="font-bold text-white">Download CV</button>
        </div>
      </a>
    </div>
  );
};

export default SideBar;
