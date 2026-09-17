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

  // Most photos read best close to square, but a strict 1:1 crop chops off
  // heads/feet on tall portraits or the sides of wide landscapes. Bend the
  // frame toward the photo's real shape, clamped so it never strays far
  // from "big and roughly square."
  const rawRatio =
    current.src && current.src.width && current.src.height
      ? current.src.width / current.src.height
      : 1;
  const aspect = Math.min(1.25, Math.max(0.8, rawRatio));

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

        <div className={styles.photoMainImage} style={{ aspectRatio: aspect }}>
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
