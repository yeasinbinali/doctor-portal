import React from 'react';
import Banner from '../Banner/Banner';
import PortalInfo from '../PortalInfo/PortalInfo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PortalInfo></PortalInfo>
            <Services></Services>
        </div>
    );
};

export default Home;