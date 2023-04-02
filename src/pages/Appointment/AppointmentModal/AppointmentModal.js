import format from "date-fns/format";
import React from "react";

const AppointmentModal = ({ treatment, selected }) => {
  const { name, slots } = treatment;
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
          <p className="py-4">
            <input
              type="text"
              placeholder={`${format(selected, "PP")}`}
              className="input input-bordered w-full mb-2"
              readOnly
            />
            <select className="select select-bordered w-full mb-2">
              {slots.map(slot => <option>{slot}</option>)}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full mb-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full mb-2"
            />
            <button className="btn w-full bg-gradient-to-r from-primary to-secondary text-white border-0">
              Submit
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
