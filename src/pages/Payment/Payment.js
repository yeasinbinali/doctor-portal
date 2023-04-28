import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { treatment, price, slot, appointmentDate } = booking;

  return (
    <div className="w-full mx-auto p-5">
      <div className='border-2 p-5 rounded'>
        <h2>Card Number: 4242 4242 4242 4242</h2>
        <h2>Date: Any Future Date</h2>
        <h2>CVC: Any 3digits</h2>
        <h2>ZIP: Any 5digits</h2>
        <h2 className="text-2xl font-bold">
          Payment for <strong className="text-primary">{treatment}</strong>
        </h2>
        <h2 className="my-2">
          Please pay <strong>${price}</strong> for your appointment on{" "}
          {appointmentDate} at {slot}
        </h2>
        <div className="md:w-96">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
