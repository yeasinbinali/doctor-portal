import format from "date-fns/format";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext";
import toast from "react-hot-toast";

const BookingAppointment = ({ treatment, selected, setTreatment, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots, price } = treatment;
  const date = format(selected, "PP");

  const handleBookingAppointment = (event) => {
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
      phone,
      price,
    };

    fetch("https://doctor-portal-server-gamma-five.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

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
          <h3 className="text-lg font-bold appointmentName">{name}</h3>
          <form onSubmit={handleBookingAppointment}>
            <input
              type="text"
              placeholder={date}
              name="date"
              className="input input-bordered w-full mb-2"
              readOnly
            />
            <select name="slot" className="select select-bordered w-full mb-2">
              {slots.map((slot, i) => (
                <option key={i}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name / Please Login or signup"
              required
              className="input input-bordered w-full mb-2"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address / Please Login or signup"
              required
              className="input input-bordered w-full mb-2"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              required
              className="input input-bordered w-full mb-2"
            />
            <button className="btn w-full mb-2 bg-gradient-to-r from-primary to-secondary text-white border-0">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
