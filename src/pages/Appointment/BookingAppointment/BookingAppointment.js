import format from "date-fns/format";
import React from "react";

const BookingAppointment = ({ treatment, selected, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selected, "PP");

  const handleBookingAppointment = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const fullName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const bookingForm = {
      appointmentDate: date,
      patientName: fullName,
      treatment: name,
      slot,
      email, 
      phone
    }

    setTreatment(null);

  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBookingAppointment}>
            <input
              type="text"
              placeholder={date}
              name='date'
              className="input input-bordered w-full mb-2"
              readOnly
            />
            <select 
                name='slot'
                className="select select-bordered w-full mb-2"
            >
              {slots.map((slot, i) => <option
                key = {i}
              >{slot}</option>)}
            </select>
            <input
              type="text"
              name='name'
              placeholder="Your name"
              className="input input-bordered w-full mb-2"
            />
            <input
              type="text"
              name='email'
              placeholder="Email address"
              className="input input-bordered w-full mb-2"
            />
            <input
              type="text"
              name='phone'
              placeholder="Phone number"
              className="input input-bordered w-full mb-2"
            />
            <button
              className="btn w-full mb-2 bg-gradient-to-r from-primary to-secondary text-white border-0"
            >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
