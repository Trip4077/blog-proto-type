import React from 'react';

const Links = () => {
    return(
        <div className="links-container">
            <div className="social-links">
                <a className="social-icon" href="#" target="_blank">
                    <i className="fab fa-facebook-square w3-hover-opacity w3-margin"></i>
                </a>
                <a className="social-icon" href="#" target="_blank">
                    <i className="fab fa-twitter-square w3-hover-opacity w3-margin"></i>
                </a>
                <a className="social-icon" href="#" target="_blank">
                    <i className="fab fa-instagram-square w3-hover-opacity w3-margin"></i>
                </a>
                <a className="social-icon" href="#" target="_blank">
                    <i className="fab fa-pinterest-square w3-hover-opacity w3-margin"></i>
                </a>
            </div>

            <div className="site-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Gallery</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Links;