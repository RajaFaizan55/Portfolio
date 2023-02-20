import React from 'react'

const Education = ({ bgColor,date , title, desc }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col  rounded-lg p-7 mb-10 "
    >
        <span className="text-justify">{date}</span>
        <span className="text-justify font-bold sm:text-xl">{title}</span>
        <span className="text-justify">{desc}</span>
    </div>
  );
};

export default Education