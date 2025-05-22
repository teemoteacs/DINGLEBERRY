import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';

import goofy1 from "../assets/svg/goofy1.jpg";
import goofy2 from "../assets/svg/goofy2.jpg";
import goofy3 from "../assets/svg/goofy3.jpg";
import goofy4 from "../assets/svg/goofy4.jpg";

const images = [
  goofy1,
  goofy2,
  goofy3,
  goofy4,
];

function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };
  const allImagesLoaded = loadedImages === images.length;
  return (
    <SectionWrapper>
      <Link to="/card">
        <p className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer">
          DAMN YOU ARE OLD! JK :P SORRY NAGHALUNGKAT AKO SA GC NG GOOFY PICS MWEHEHE!
        </p>
      </Link>
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            allImagesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          drag
        >
          <img
            src={image}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad} // Increment the counter when the image loads
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default Picture;
