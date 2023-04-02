import React from "react";

const AppointmentOptions = ({ availableAppointment, setTreatment }) => {
  const { name, slots } = availableAppointment;
  return (
    <div className="card text-center bg-base-100 border">
      <div className="card-body">
        <h2 className='text-2xl font-bold text-primary'>{name}</h2>
        {slots.length > 0 ? <p>{slots[0]}</p> : ''}
        <label onClick={() => setTreatment(availableAppointment)} htmlFor="booking-modal" className="btn text-white border-0 my-2 bg-gradient-to-r from-primary to-secondary">Book Appointment</label>
      </div>
    </div>
  );
};

export default AppointmentOptions;
