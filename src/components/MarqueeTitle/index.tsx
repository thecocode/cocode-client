import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './styles.css'

interface content {
  content : string;
}

export function MarqueeTitle({content}: content ) {
  return (
    <div className='marquee font-poppins'>
      <AnimatePresence>
        <motion.span
          animate={{ translateX: '-100%' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className='marquee-text'>
            <span>
              {content} <div className='dot'></div>{' '}
            </span>
            <span>
              {content}<div className='dot'></div>
            </span>
          </div>
        </motion.span>
        <motion.span
          animate={{ translateX: '-100%' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className='marquee-text'>
            <span>
              {content} <div className='dot'></div>
            </span>
            <span>
              {content} <div className='dot'></div>
            </span>
          </div>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
