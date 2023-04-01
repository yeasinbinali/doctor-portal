import React from 'react';
import AppointmentBar from '../AppointmentBar/AppointmentBar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Dental from '../Dental/Dental';
import PortalInfo from '../PortalInfo/PortalInfo';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PortalInfo></PortalInfo>
            <Services></Services>
            <Dental></Dental>
            <AppointmentBar></AppointmentBar>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;