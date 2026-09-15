import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../pages/home.module.css';

// Renders up to 5 photos at a time from a larger pool (works fine with
// anywhere from 1 to ~10+ entries). Click/tap rotates the stack — the
// front card's caption is the only one shown.
export default function PhotoStack({ photos }) {
  const [index, setIndex] = useState(0);
  const visibleCount = Math.min(5, photos.length);

  const next = () => setIndex((i) => (i + 1) % photos.length);

  const stack = Array.from({ length: visibleCount }, (_, i) => {
    const photoIndex = (index + i) % photos.length;
    return { ...photos[photoIndex], pos: i, photoIndex };
  });

  return (
    <div className={styles.photoStackWrap}>
      <button
        type="button"
        className={styles.photoStack}
        onClick={next}
        aria-label="Show next photo"
      >
        {stack
          .slice()
          .reverse()
          .map((p) => (
            <motion.div
              key={p.photoIndex}
              className={styles.photoStackCard}
              animate={{
                scale: 1 - p.pos * 0.045,
                y: p.pos * 12,
                rotate:
                  p.pos === 0
                    ? 0
                    : (p.photoIndex % 2 === 0 ? 1 : -1) * (2 + p.pos * 1.5),
                opacity: 1 - p.pos * 0.2,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              style={{ zIndex: visibleCount - p.pos }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 700px) 80vw, 340px"
                style={{ objectFit: 'cover' }}
              />
              {p.pos === 0 && (
                <div className={styles.photoStackCaption}>{p.caption}</div>
              )}
            </motion.div>
          ))}
      </button>
      <p className={styles.photoStackHint}>
        Tap for another · {index + 1}/{photos.length}
      </p>
    </div>
  );
}
