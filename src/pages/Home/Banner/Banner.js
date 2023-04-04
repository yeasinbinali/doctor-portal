import React from "react";
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
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
            Services: {' '}
            <Typewriter 
              words={['Cosmetic Dentistry', 'Teeth Cleaning', 'Cavity Protection', 'Pediatric Dental', 'Oral Surgery']}
              loop={5}
              typeSpeed={70}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </h1>
          <p className="py-6 md:pr-5 text-justify">
            A doctors portal is a health care institution providing patient treatment
            with specialized health science and auxiliary healthcare staff and
            medical equipment.
          </p>
          <PrimaryButton>Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
