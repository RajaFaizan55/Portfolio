import React from 'react'

const Contact = ({icon , title ,val}) => {
  return (
    <div className=" flex items-center border-b border-black mb-3 ">
      <img src={icon} className="w-5 mr-4" />
      <div className='flex flex-col'>
        <span className='font-bold' >{title}</span>
        <span>{val}</span>
      </div>
    </div>
  );
}

export default Contact