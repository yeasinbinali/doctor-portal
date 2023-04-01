import React from "react";

const Testimony = ({ testimony }) => {
  const { name, country, comment, image } = testimony;
  return (
    <div className="border p-5 rounded">
      <div>
        <p className='text-justify'>{comment}</p>
      </div>
      <div className="flex items-center mt-4">
        <div className='w-16 border-2 border-primary rounded-full'>
          <img className='p-0.5' src={image} alt="" />
        </div>
        <div className='ml-3'>
          <h5>{name}</h5>
          <small>{country}</small>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
