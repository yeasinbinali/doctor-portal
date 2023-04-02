import format from 'date-fns/format';
import React from 'react';

const AvailableAppointment = ({selected}) => {
    return (
        <div>
            <p className='text-secondary text-center'>You have selected the date: {format(selected, 'PP')}</p>
        </div>
    );
};

export default AvailableAppointment;