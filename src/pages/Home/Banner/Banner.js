import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import banner from "../../../assets/images/chair.png";
import PrimaryButton from "../../../button/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero lg:mt-20 md:mt-12">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          src={banner}
          className="lg:max-w-sm md:max-w-xs rounded-lg shadow-2xl"
          alt="banner"
        />
        <div>
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            _{' '}
            <Typewriter 
              words={['Cosmetic Dentistry', 'Teeth Cleaning', 'Cavity Protection', 'Pediatric Dental', 'Oral Surgery']}
              loop={Infinity}
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </h1>
          <p className="py-6 md:pr-5 text-justify">
            A doctors portal is a health care institution providing patient treatment
            with specialized health science and auxiliary healthcare staff and
            medical equipment.
          </p>
          <PrimaryButton><Link to='/appointment'>Appointment</Link></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
