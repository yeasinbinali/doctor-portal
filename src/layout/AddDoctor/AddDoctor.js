import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {data: specialties, isLoading} = useQuery({
    queryKey: ['specialty'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/appointmentSpecialty')
      const data = await res.json();
      return data;
    }
  })

  const handleAddDoctor = (data) => {
    console.log(data);
  };

  if(isLoading){
    return <progress className="progress w-56"></progress>
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
          <select className="select input-bordered w-full max-w-xs">
            {
              specialties.map(specialty => <option
                key = {specialty._id}
                value = {specialty.name}
              >{specialty.name}</option>)
            }
            
          </select>
        </div>
        <div className="form-control w-full mx-auto">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("img", {
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
