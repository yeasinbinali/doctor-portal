import React from "react";
import { DayPicker } from "react-day-picker";
import chair from '../../../assets/images/chair.png';


const AppointmentBanner = ({selected, setSelected}) => {
  return (
    <div className="hero my-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl ml-8"
          alt='chair'
        />
        <div>
          <DayPicker 
            mode='single'
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
