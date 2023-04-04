import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  }
  return (
    <div className="container">
      <div className="w-96 mx-auto my-5 p-7">
        <h2 className='text-xl text-center'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {required: 'Email is required'})}
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
              {...register("password", {required: 'Password is required',
              minLength: {value: 6, message: 'Password must be 6 characters & longer'}
            })}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password && <small className='text-red-600' role="alert">{errors.password?.message}</small>}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input className='btn btn-accent w-full text-white' type="submit" />
        </form>
        <p className='my-2'>New to Doctor Portal? <Link className='text-secondary' to='/signup'>Create an account</Link></p>
        <div className="divider">OR</div>
        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
