import React, { useEffect, useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  const [treatments, setTreatments] = useState(null);

  useEffect(() => {
      fetch('appointmentOptions/json')
      .then(res => res.json())
      .then(data => setTreatments(data))
  }, [])

  return (
    <div>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AvailableAppointment selected={selected}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
