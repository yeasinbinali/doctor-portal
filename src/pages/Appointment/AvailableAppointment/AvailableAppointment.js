import format from 'date-fns/format';
import React, { useEffect, useState } from 'react';
import BookingAppointment from '../BookingAppointment/BookingAppointment';
import SingleAppointment from '../SingleAppointment/SingleAppointment';

const AvailableAppointment = ({selected}) => {
    const [availableAppointments, setAvailableAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAvailableAppointments(data))
    }, [])

    return (
        <div>
            <p className='text-center text-secondary'>You have started the date: {format(selected, 'PP')}</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-8'>
                {
                    availableAppointments.map(availableAppointment => <SingleAppointment
                            availableAppointment = {availableAppointment}
                            key = {availableAppointment._id}
                            setTreatment={setTreatment}
                        ></SingleAppointment>
                    )
                }
            </div>
            {
                treatment && 
                <BookingAppointment
                    selected={selected}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingAppointment>
            }
        </div>
    );
};

export default AvailableAppointment;