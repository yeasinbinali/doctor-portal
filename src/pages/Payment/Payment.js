import React from 'react';
import { useLoaderData } from 'react-router';

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    return (
        <div>
            <h2>Payment</h2>
        </div>
    );
};

export default Payment;