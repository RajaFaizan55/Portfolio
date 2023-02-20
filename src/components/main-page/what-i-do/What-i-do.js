import React from 'react'

const WhatIDo = ({ icon ,  title , desc , bgColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col justify-center sm:flex-row sm:justify-start items-center rounded-lg p-7 "
    >
      <img alt='icon' src={icon} className="w-16 mr-6" />
      <div>
        <h1 className="font-bold lg:text-3xl mb-3 ">{title}</h1>
        <span className="text-justify">{desc}</span>
      </div>
    </div>
  );
};

export default WhatIDo