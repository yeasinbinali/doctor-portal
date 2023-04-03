import format from "date-fns/format";
import React, { useState, useEffect } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";

const AvailableAppointment = ({ selected }) => {
  const [availableAppointments, setAvailableAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAvailableAppointments(data));
  }, []);

  return (
    <div>
      <p className="text-secondary text-center">
        You have selected the date: {format(selected, "PP")}
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10">
        {availableAppointments.map((availableAppointment) => (
          <AppointmentOptions
            key={availableAppointment._id}
            availableAppointment={availableAppointment}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          setTreatment={setTreatment}
          treatment={treatment}
          selected={selected}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
