import React from "react";

const Service = ({ service }) => {
  const { title, image, details } = service;
  return (
    <div className="card shadow-lg border">
      <figure>
        <img
          src={image}
          alt="icon"
          className='pt-7 animate-pulse'
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Service;
