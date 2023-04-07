import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import toast from 'react-hot-toast';

const Signup = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const {createUser} = useContext(AuthContext);
  const [signupError, setSignupError] = useState('');

  const handleSignup = (data, event) => {
    const form = event.target;
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const user = result.user;
      setSignupError('');
      console.log(user);
      toast.success('User created successfully');
      form.reset();
    })
    .catch(error => {
      const errorMessage = error.message;
      setSignupError(errorMessage);
    })
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
              {...register("Name", {
                required: 'Name is required'
              })}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            {errors.name && <small className='text-red-600' role="alert">{errors.name?.message}</small>}
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: 'Email is required'
              })}
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            {errors.email && <small className='text-red-600' role="alert">{errors.email?.message}</small>}
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: 'Password is required',
                minLength: {value: 6, message: 'Must be 6 characters and longer'},
                pattern: {value: /^(?=.*[A-Z])(?=.*[0-9])/, message: 'Use one uppercase and one number'}
              })}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password && <small className='text-red-600' role="alert">{errors.password?.message}</small>}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input className="btn btn-accent w-full text-white" type="submit" />
          {signupError && <p className='text-red-600 text-center'>{signupError}</p>}
        </form>
        <p className="my-2">
          Already have an account? {" "}
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
