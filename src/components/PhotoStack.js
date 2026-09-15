import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../pages/home.module.css';

// Three-card fan: a main photo in the center with one diagonal photo
// peeking out on each side. Click the left/right card to step through
// the pool (wraps around). Works with any pool size >= 3.
export default function PhotoStack({ photos }) {
  const [index, setIndex] = useState(0);
  const count = photos.length;

  const go = (delta) => setIndex((i) => (i + delta + count) % count);

  const leftIndex = (index - 1 + count) % count;
  const rightIndex = (index + 1) % count;

  const left = photos[leftIndex];
  const center = photos[index];
  const right = photos[rightIndex];

  return (
    <div className={styles.photoFanWrap}>
      <div className={styles.photoFan}>
        <button
          type="button"
          className={`${styles.fanCard} ${styles.fanSide} ${styles.fanLeft}`}
          onClick={() => go(-1)}
          aria-label="Previous photo"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={leftIndex}
              className={styles.fanImageWrap}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Image src={left.src} alt={left.alt} fill sizes="140px" style={{ objectFit: 'cover' }} />
            </motion.div>
          </AnimatePresence>
        </button>

        <div className={`${styles.fanCard} ${styles.fanCenter}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className={styles.fanImageWrap}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={center.src}
                alt={center.alt}
                fill
                sizes="(max-width: 700px) 60vw, 320px"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.photoStackCaption}>{center.caption}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className={`${styles.fanCard} ${styles.fanSide} ${styles.fanRight}`}
          onClick={() => go(1)}
          aria-label="Next photo"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={rightIndex}
              className={styles.fanImageWrap}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Image src={right.src} alt={right.alt} fill sizes="140px" style={{ objectFit: 'cover' }} />
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
      <p className={styles.photoStackHint}>
        {index + 1}/{count}
      </p>
    </div>
  );
}
