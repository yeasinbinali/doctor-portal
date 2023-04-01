import React from "react";

const Info = ({ info }) => {
  const { title, details, color, image } = info;
  return (
    <div className={`hero ${color} rounded`}>
      <div className="hero-content flex justify-between py-5">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="icon"
        />
        <div className='text-white'>
          <h1 className="font-bold">{title}</h1>
          <p className="py-3">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
