import React from 'react';
import message from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../button/PrimaryButton';

const Contact = () => {
    return (
        <div style={{backgroundImage: `url(${message})`}} className='text-center pt-10 pb-5'>
            <h5 className='text-primary'>Contact us</h5>
            <h2 className='lg:text-3xl md:text-2xl text-white'>Stay connected with us</h2>
            <input type="email" placeholder="Email" className="input w-full max-w-xs mt-8" /><br />
            <input type="text" placeholder="Subject" className="input w-full max-w-xs my-3" /><br />
            <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    );
};

export default Contact;