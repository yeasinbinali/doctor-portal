import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // signInWithGoogle
  const { loginUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathName || "/";

  if (token) {
    navigate(from, { replace: true });
    toast.success("Login successfully");
  }

  const handleLogin = (data, event) => {
    const form = event.target;
    console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginError("");
        form.reset();
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };

  // const handleGoogle = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       saveUser(user.displayName, user.email);
  //     })
  //     .catch((error) => console.error(error));
  // };

  // const saveUser = (name, email) => {
  //   const user = { name, email };
  //   fetch(`https://doctor-portal-server-gamma-five.vercel.app/users`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoginUserEmail(email);
  //     });
  // };

  return (
    <div className="container">
      <div className="md:w-96 mx-auto my-5 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters & longer",
                },
              })}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <small className="text-red-600" role="alert">
                {errors.password?.message}
              </small>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full text-white create-btn"
            type="submit"
          />
          {loginError && (
            <p className="text-red-600 text-center">{loginError}</p>
          )}
        </form>
        <p className="my-2">
          New to Doctor Portal?{" "}
          <Link className="text-secondary" to="/signup">
            Create an account
          </Link>
        </p>
        {/* <div className="divider">OR</div>
        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full google-btn"
        >
          CONTINUE WITH GOOGLE
        </button> */}
      </div>
    </div>
  );
};

export default Login;
