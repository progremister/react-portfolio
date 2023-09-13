import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { urlFor, client } from '../client';
import AppWrap from '../wrappers/AppWrap';
import MotionWrap from '../wrappers/MotionWrap';

interface Testimonial {
    [key: number]: string;
    name: string;
    imageurl: string;
    feedback: string;
    company: string;
}

interface Brand {
    _id: string;
    name: string;
    imgUrl: string;
}

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);
    const testim = testimonials[currentIndex];
    const handleClick = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        const brandsQuery = '*[_type == "brands"]';

        client.fetch(query).then((data) => {
            setTestimonials(data);
        });

        client.fetch(brandsQuery).then((data) => {
            setBrands(data);
        });
    }, []);

    return (
        <>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={testim.imageurl ? urlFor(testim.imageurl).toString() : "public/apple-touch-icon.png"} alt={testim.name} />
                        <div className="app__testimonial-content">
                            <p className="p-text">{testim.feedback}</p>
                            <div>
                                <h4 className="bold-text">{testim.name}</h4>
                                <h5 className="p-text">{testim.company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonial-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand._id}
                    >
                        <img src={urlFor(brand.imgUrl).toString()} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Testimonials, 'app__testimonial'),
    'testimonial',
    'app__primarybg',
);