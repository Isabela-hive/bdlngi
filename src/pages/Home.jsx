import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import Inspiration from '../components/Inspiration';
import { motion } from 'framer-motion/dist/framer-motion';
import Contributors from '../components/Contributors';

function Home() {
  const [bg, setBg] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0, easing: 'ease-in-out' }}
    >
      <p>Hey Isabellah</p>
      <Carousel setBg={(b) => setBg(b)} />
      <Inspiration bg={bg} />
      <Contributors />
    </motion.div>
  );
}

export default Home;
