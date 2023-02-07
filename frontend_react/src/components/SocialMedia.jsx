import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://www.instagram.com/dmytro.kolosovskyi/">
                <BsInstagram />
            </a>
            <a href="https://www.facebook.com/dmitro.kolosovskyi.3">
                <FaFacebookF  />
            </a>
            <a href="https://twitter.com/d_kolosovskyi">
                <BsTwitter />
            </a>
        </div>
    );
};

export default SocialMedia;
