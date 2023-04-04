import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const handleSignup = (data) => {
    console.log(data);
  };

  return (
    <div className="container text-center">
      <div className="w-96 mx-auto my-5 p-7">
        <h2 className="text-xl">Signup</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("Name")}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email")}
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input className="btn btn-accent w-full text-white" type="submit" />
        </form>
        <p className="my-2">
          New to Doctor Portal?{" "}
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Signup;
