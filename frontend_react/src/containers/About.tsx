import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../client";
import MotionWrap from "../wrappers/MotionWrap";
import AppWrap from "../wrappers/AppWrap";

interface About {
  title: string;
  imgUrl: string;
  description: string;
}

const About = () => {
  const [abouts, setAbouts] = useState<About[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Attractive Website</span>
        <br />
        Means <span>Good Business</span>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl).toString()} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </h2>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
