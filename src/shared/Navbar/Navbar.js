import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Navbar = ({ theme, toggleTheme }) => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
    navigate("/");
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <button onClick={handleLogout} className="btn btn-outline border-0">
            <Link>Logout</Link>
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
        <div className='flex items-center ml-4'>
          <small className='my-auto'>{theme === "light" ? "light" : "dark"}</small>
          <input type="checkbox" onChange={toggleTheme} className="toggle my-auto" checked={theme === 'dark'} />
        </div>
    </React.Fragment>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 dropmenu"
          >
            {menuItems}
          </ul>
        </div>
        {/* <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link> */}
        <h2 className="text-2xl font-bold">Doctors Portal</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
