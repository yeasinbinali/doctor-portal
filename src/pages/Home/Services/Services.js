import React from "react";
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import teeth from '../../../assets/images/whitening.png';
import Service from "./Service/Service";

const services = [
    {
        id: 1,
        title: 'Flouride Treatment',
        image: fluoride,
        details: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades.'
    },
    {
        id: 2,
        title: 'Cavity Filling',
        image: cavity,
        details: 'Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse such as from nail-biting or tooth grinding.'
    },
    {
        id: 3,
        title: 'Teeth Whitening',
        image: teeth,
        details: 'Teeth Whitening is a quick and painless in-office whitening system that provides dramatic result-teeth that are up to eight shades whiter.'
    }
]

const Services = () => {
  return (
    <div className='mt-10'>
      <div className='text-center'>
        <h6 className="text-primary">Our Services</h6>
        <h2 className="text-2xl">Services We Provide</h2>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10'>
          {
              services.map(service => <Service
                key = {service.id}
                service = {service}
              ></Service>)
          }
      </div>
    </div>
  );
};

export default Services;
