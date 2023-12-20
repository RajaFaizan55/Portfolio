import React from "react";

const ProgressBar = ({ title, percentage }) => {
  return (
    <div className="my-3">
      <div className=" flex justify-between mb-1 text-base font-medium text-purple-700 ">
        <span> {title}</span>
        <span> {percentage}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
        <div
          className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
          style={{ width: "90%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
