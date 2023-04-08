import format from "date-fns/format";
import {useQuery} from '@tanstack/react-query';
import React, { useState } from "react";
import BookingAppointment from "../BookingAppointment/BookingAppointment";
import SingleAppointment from "../SingleAppointment/SingleAppointment";

const AvailableAppointment = ({ selected }) => {
  const date = format(selected, 'PP');
  const [treatment, setTreatment] = useState(null);

  const {data: availableAppointments = [], refetch} = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
      .then((res) => res.json())
  })

  return (
    <div>
      <p className="text-center text-secondary">
        You have started the date: {format(selected, "PP")}
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-8">
        {availableAppointments.map((availableAppointment) => (
          <SingleAppointment
            availableAppointment={availableAppointment}
            key={availableAppointment._id}
            setTreatment={setTreatment}
          ></SingleAppointment>
        ))}
      </div>
      {treatment && (
        <BookingAppointment
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingAppointment>
      )}
    </div>
  );
};

export default AvailableAppointment;
