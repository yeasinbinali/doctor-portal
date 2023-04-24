import React, { useState, useEffect } from "react";
import doctor from "../../assets/images/doctor.png";

const About = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <section>
      {/* about us */}
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-1/2 p-5">
          <h2 className="text-3xl font-bold my-5 text-primary">About US</h2>
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
      {/* doctors */}
      <div className="p-5">
        <h2 className="text-3xl font-bold my-5 text-primary">
          Our Specialists
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {doctors.map((doctor) => (
            <div
              className="card border-4 mx-auto p-3"
              key={doctor._id}
            >
              <img className="w-52 h-52" src={doctor.image} alt="doctor" />
                <h2 className="text-lg">{doctor.name}</h2>
                <h2 className="text-lg">{doctor.specialty}</h2>
                <h2 className="text-lg font-bold">{doctor.email}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
