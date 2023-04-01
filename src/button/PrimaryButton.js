import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-0 animate-bounce my-5">{children}</button>
        </div>
    );
};

export default PrimaryButton;