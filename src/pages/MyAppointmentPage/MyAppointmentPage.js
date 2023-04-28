import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const MyAppointmentPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="p-5">
      <h1 className="my-5 text-2xl font-bold text-primary">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Treatment</th>
              <th>time</th>
              <th>Date</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.email}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.slot}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>
                    {
                      booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary'>
                        Pay
                      </button></Link>
                    }
                    {
                      booking.price && booking.paid && <span className='text-green-600'>Paid</span>
                    }
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointmentPage;
