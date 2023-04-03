import React from "react";

const SingleAppointment = ({ availableAppointment, setTreatment }) => {
  const { name, slots } = availableAppointment;
  return (
    <div className="card border-2">
      <div className="card-body">
        <div className="text-center">
          <h2 className="text-2xl text-primary font-bold">{name}</h2>
          <p className="my-1">
            {slots.length > 0 ? slots[0] : "Try another one"}
          </p>
          {slots.length > 1 ? (
            <p>{slots.length} Spaces available</p>
          ) : (
            <p>{slots.length} space available</p>
          )}
        </div>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(availableAppointment)}
            className="btn bg-gradient-to-r from-primary to-secondary text-white border-0"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
