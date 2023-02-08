import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        setLoading(true);
        const contact = {
            _type: 'contact',
            name: formData.name,
            email: email,
            message: message
        }
        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            });
    }
    return (
        <>
            <h2 className="head-text">Chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email"/>
                    <a href="mailto:kolosovskyi.dmytro@gmail.com" className="p-text">kolosovskyi.dmytro@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile"/>
                    <a href="tel:+380689374099" className="p-text">+380 (68) 937-4099</a>
                </div>
            </div>

            {!isFormSubmitted ?
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input type="text" className="p-text" placeholder="Your Name" name="name" value={name}
                               onChange={handleChangeInput}/>
                    </div>
                    <div className="app__flex">
                        <input type="email" className="p-text" placeholder="Your Email" name="email" value={email}
                               onChange={handleChangeInput}/>
                    </div>
                    <div className="app__flex">
                    <textarea className="p-text"
                              name="message"
                              value={message}
                              placeholder="Your Message"
                              onChange={handleChangeInput}></textarea>
                    </div>
                    <button type="button" className="p-text"
                            onClick={handleSubmit}>{loading ? 'Sending' : 'Send Messsage'}</button>
                </div>
                :
                <div>
                    <h3 className="head-text">Thank you for getting in touch!</h3>
                </div>
            }
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
 'app__whitebg'
);