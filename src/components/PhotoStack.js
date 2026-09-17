import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../pages/home.module.css';

// Single large photo viewer. Click the left/right arrows to step through
// the pool (wraps around). Each photo scales/fades in over the last one,
// and the caption sits below the frame instead of overlaid on it.
export default function PhotoStack({ photos }) {
  const [index, setIndex] = useState(0);
  const count = photos.length;

  const go = (delta) => setIndex((i) => (i + delta + count) % count);
  const current = photos[index];

  return (
    <div className={styles.photoMainWrap}>
      <div className={styles.photoMainFrame}>
        <button
          type="button"
          className={`${styles.photoNavBtn} ${styles.photoNavPrev}`}
          onClick={() => go(-1)}
          aria-label="Previous photo"
        >
          ‹
        </button>

        <div className={styles.photoMainImage}>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={index}
              className={styles.photoMainImageInner}
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.06 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 700px) 88vw, 520px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className={`${styles.photoNavBtn} ${styles.photoNavNext}`}
          onClick={() => go(1)}
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={index}
          className={styles.photoMainCaption}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
        >
          {current.caption}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
