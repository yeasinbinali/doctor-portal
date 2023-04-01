import React from 'react';
import Info from './Info/Info';
import clock from '../../../assets/icons/clock.svg';
import Marker from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';

const PortalInfo = () => {
    const infoes = [
        {
            id: 1,
            title: 'Opening Hour',
            details: 'Starts from 9AM to 12PM',
            color: 'bg-gradient-to-r from-primary to-secondary',
            image: clock
        },
        {
            id: 2,
            title: 'Visit Our Location',
            details: 'Gulshan 144/R13, Dhaka',
            color: 'bg-accent',
            image: Marker
        },
        {
            id: 3,
            title: 'Contact Us Now',
            details: '+88 01305256024',
            color: 'bg-gradient-to-r from-primary to-secondary',
            image: Phone
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:my-20 md:my-10'>
            {
                infoes.map(info => <Info
                    info = {info}
                    key = {info.id}
                ></Info>)
            }
        </div>
    );
};

export default PortalInfo;