import React from 'react';
import placeholder from '../../assets/logo-placeholder.png';

const Logo = () => {
    return(
        <div className="logo-container">
            {/* <p>Living In The Middle</p> */}
            <img src={placeholder}
                 alt="Logo" 
                 className="logo-nav"
            />
        </div>
    )
}

export default Logo;