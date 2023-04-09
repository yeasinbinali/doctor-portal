import React from "react";
import "./Main.css";
import { Outlet } from "react-router";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const Main = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="container mx-auto">
          <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Main;
