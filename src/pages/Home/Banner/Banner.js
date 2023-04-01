import React from "react";
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
          <h1 className="lg:text-5xl md:text-3xl text-3xl font-bold">Your new smile starts here</h1>
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
