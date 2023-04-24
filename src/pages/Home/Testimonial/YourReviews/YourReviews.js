import React from "react";

const YourReviews = () => {
  return (
    <div className="bg-base-200">
      <div className='w-1/2 mx-auto p-3'>
        <h2 className='text-primary text-3xl text-center my-3'>Your Reviews</h2>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
      </div>
    </div>
  );
};

export default YourReviews;
