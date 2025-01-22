import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedText.css'

const AnimatedText = ({ text }) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className='animatedtext'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {words.map((word, index) => (
        <motion.h1
          key={index}
          variants={childVariants}
          style={{
            fontSize:'3.5em',
            color:'black',
            marginRight: '8px',
            fontStyle:'italic',
            textShadow:'2px 4px 8px gray'
              
           }}
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
