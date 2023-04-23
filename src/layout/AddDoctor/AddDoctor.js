import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data, event) => {
    const form = event.target;
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if(imgData.success){
        const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: imgData.data.url
        }
        
        fetch('http://localhost:5000/doctors', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(result => {
          if(result.acknowledged){
            toast.success(`Doctor ${data.name} successfully added`);
          }
        });
      }
      form.reset();
    })
    doctor.reset();
  };

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="w-96 my-5 p-7">
      <h2 className="text-2xl font-bold mb-4">Add a new doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
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
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email", {
              required: "Email is required",
            })}
            placeholder="Email Address"
            className="input input-bordered w-full"
          />
          {errors.email && (
            <small className="text-red-600" role="alert">
              {errors.email?.message}
            </small>
          )}
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
          {...register('specialty')}
          className="select input-bordered w-full max-w-xs">
            {specialties &&
              specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is required",
            })}
            className="input input-bordered w-full"
          />
          {errors.name && (
            <small className="text-red-600" role="alert">
              {errors.name?.message}
            </small>
          )}
        </div>
        <input
          className="btn w-full text-white mt-4 create-btn"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
