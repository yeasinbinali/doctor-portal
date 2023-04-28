import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const YourReviews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleReview = (data, event) => {
    const form = event.target;
    const image = data.image[0]
    const formData = new FormData();
    formData.append('image', image);
    fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if(imgData.success){
       const review = {
         name: data.name,
         address: data.address,
         image: imgData.data.url,
         message: data.message
       }
       fetch('http://localhost:5000/reviews', {
         method: 'POST',
         headers: {
           'content-type': 'application/json',
           authorization: `bearer ${localStorage.getItem('accessToken')}`
         },
         body: JSON.stringify(review)
       })
       .then(res => res.json())
       .then(reviewData => {
         if(reviewData.acknowledged){
           toast.success(`Thanks ${data.name} for giving your review!`);
           form.reset();
         }
       })
      }
    })
  }

  return (
    <div>
      <div className="text-center p-3">
        <h2 className="text-primary text-3xl my-3 font-bold">Your Reviews</h2>
        <form onSubmit={handleSubmit(handleReview)}>
          <div className="form-control md:w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                maxLength: 20
              })}
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <small className="text-red-600" role="alert">
                {errors.name?.message}
              </small>
            )}
          </div>
          <div className="form-control md:w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              {...register("address", {
                required: "address is required",
              })}
              placeholder="Enter your address area"
              className="input input-bordered w-full"
            />
            {errors.address && (
              <small className="text-red-600" role="alert">
                {errors.address?.message}
              </small>
            )}
          </div>
          <div className="form-control md:w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Your Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "image is required",
              })}
              placeholder="Your image"
              className="input input-bordered w-full"
            />
            {errors.image && (
              <small className="text-red-600" role="alert">
                {errors.image?.message}
              </small>
            )}
          </div>
          <div className="form-control md:w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              {...register("message", {
                required: "message is required"
              })}
              placeholder="Your message"
              className="textarea textarea-bordered w-full textarea-lg"
            />
            {errors.message && (
              <small className="text-red-600" role="alert">
                {errors.message?.message}
              </small>
            )}
          </div>
          <input
            className="btn w-1/4 text-white my-6 create-btn"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default YourReviews;
