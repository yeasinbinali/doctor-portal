import React from "react";

const Review = ({ review }) => {
  const { name, address, message, image } = review;
  return (
    <div className="flex flex-col justify-between border p-5 rounded">
      <div>
        <p className="text-justify">❝{message}❞</p>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-10 border-2 border-primary rounded-full">
          <img className="p-0.5 w-10 h-10 rounded-full" src={image} alt="" />
        </div>
        <div className="ml-3">
          <h5>{name}</h5>
          <small>{address}</small>
        </div>
      </div>
    </div>
  );
};

export default Review;
