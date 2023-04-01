import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../button/PrimaryButton";

const AppointmentBar = () => {
  return (
    <section
      className="md:mt-32 mb-20"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="hero">
        <div className="hero-content flex justify-between">
          <img
            src={doctor}
            className="max-w-sm -mt-48 md:block hidden rounded-lg shadow-2xl"
            alt="doctor"
          />
          <div>
            <h6 className="text-primary">Appointment</h6>
            <h1 className="text-3xl font-bold text-white py-5">Make an appointment Today</h1>
            <p className="text-white text-justify">
            Dedicated 24X7 call center to set appointments with your preferred doctor. Queries regarding doctors’ appointment schedule, earliest available doctors and other appointment related information are provided through the appointment desk.
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBar;
