import React from "react";  

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src="https://www.adobe.com/uk/creativecloud/design/discover/media_17770be5de64c9b159b23a7da870ae0bd5bc0f400.jpeg?width=1200&format=pjpg&optimize=medium" alt="" />
                </div>
                <div className="footer-icons">

                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>+7-776-212-2333</span>
                    <span>nurislamzumabek49@gmail.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;