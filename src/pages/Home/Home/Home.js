import React from 'react';
import Banner from '../Banner/Banner';
import Dental from '../Dental/Dental';
import PortalInfo from '../PortalInfo/PortalInfo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PortalInfo></PortalInfo>
            <Services></Services>
            <Dental></Dental>
        </div>
    );
};

export default Home;