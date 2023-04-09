import React, { createContext, useState } from "react";
import { Outlet } from "react-router";
import './DashboardLayout.css';
import Navbar from "../../shared/Navbar/Navbar";

export const ThemeContext = createContext(null);

const DashboardLayout = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
        <div className="drawer drawer-mobile dash-drawer" id='dash-drawer'>
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 text-base-content">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default DashboardLayout;
