import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
    {
        title: 'Frontend Development',
        description: 'I am able to make your website modern and interactive.',
        imgUrl: images.about04
    },
    {
        title: 'Backend Development',
        description: 'I will make yours website functionality wide and effective.',
        imgUrl: images.about01
    },
    {
        title: 'UX/UI design',
        description: 'You will get an attractive and eye-catching design.',
        imgUrl: images.about02
    },
    {
        title: 'SEO',
        description: 'I am a good SEO manager, so that your product will be on the top of the search queries.',
        imgUrl: images.about03
    },
];

const About = () => {
    return (
        <>
            <h2 className="head-text">
                I Know That <span>Attractive Website</span><br/>Means <span>Good Business</span>

                <div className="app__profiles">
                    {abouts.map((about, index) => (
                        <motion.div
                            whileInView={{ opacity: 1}}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: .5, type: 'tween'}}
                            className="app__profile-item"
                            key={about.title + index}
                        >
                            <img src={about.imgUrl} alt={about.title}/>
                            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                        </motion.div>
                    ))}
                </div>
            </h2>
        </>
    );
};

export default About;