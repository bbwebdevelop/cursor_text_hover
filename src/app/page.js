'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non convallis justo. Quisque gravida vitae lacus nec blandit. Integer sit amet eleifend quam. Duis ac nunc hendrerit, vestibulum odio sit amet, dictum dui. 
          </p>
      </motion.div>

      <div className={styles.body}>
        <p>This is a text about nothing. As the sun set over the horizon, casting a warm glow upon the tranquil sea, birds chirped merrily, flitting between the branches of the towering trees.</p>
      </div>

    </main>
  )
}
