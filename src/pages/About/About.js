import React from "react";
import doctor from "../../assets/images/doctor.png";

const About = () => {
  return (
    <section>
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-1/2 p-5">
          <h2 className="text-3xl font-bold my-5">About US</h2>
          <p className="text-justify">
            A doctors portal is a health care institution providing patient
            treatment with specialized health science and auxiliary healthcare
            staff and medical equipment. Dedicated 24X7 call center to set
            appointments with your preferred doctor. Queries regarding doctors’
            appointment schedule, earliest available doctors and other
            appointment related information are provided through the appointment
            desk. We offer comprehensive services from all fields of dentistry.
            In addition to high-end dental equipment, all services are provided
            in a comfortable, luxury environment.
          </p>
        </div>
        <div className="lg:w-1/3">
          <img src={doctor} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
