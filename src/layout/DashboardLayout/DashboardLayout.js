import React, { createContext, useState } from "react";
import { Outlet } from "react-router";
import "./DashboardLayout.css";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { Link } from "react-router-dom";

export const ThemeContext = createContext(null);

const DashboardLayout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className='container mx-auto'>
          <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
          <div className="drawer drawer-mobile dash-drawer" id="dash-drawer">
            <input
              id="dashboard-drawer"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              <Outlet></Outlet>
            </div>
            <div className="drawer-side mr-2">
              <label
                htmlFor="dashboard-drawer"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 text-base-content">
                <li>
                  <Link to='/dashboard'>My Appointment</Link>
                </li>
                <li>
                  <Link to='/dashboard/allusers'>All Users</Link>
                </li>
                <li>
                  <Link to='/dashboard/adddoctor'>Add A Doctor</Link>
                </li>
              </ul>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default DashboardLayout;
