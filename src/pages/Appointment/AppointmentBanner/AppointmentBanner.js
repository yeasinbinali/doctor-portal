import React from "react";
import { DayPicker } from "react-day-picker";
import chair from '../../../assets/images/chair.png';
import { differenceInCalendarDays } from 'date-fns';


const AppointmentBanner = ({selected, setSelected}) => {
  function isPastDate(date) {
    return differenceInCalendarDays(date, new Date()) < 0;
  }

  return (
    <div className="hero my-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:max-w-sm md:max-w-xs rounded-lg shadow-2xl ml-8"
          alt='chair'
        />
        <div>
          <DayPicker 
            mode='single'
            selected={selected}
            disabled={isPastDate}
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
