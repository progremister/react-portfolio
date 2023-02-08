import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
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
            <a href="https://github.com/progremister">
                <BsGithub />
            </a>
        </div>
    );
};

export default SocialMedia;
