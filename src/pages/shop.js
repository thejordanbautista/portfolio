import Head from 'next/head';
import styles from './shop.module.css';

// Replace image URLs and listing links as you add real items.
// Leave image as '' to show the "Photo coming soon" placeholder.
const depopItems = [
  {
    id: 'depop-1',
    title: '90s Portland Trail Blazers Tee',
    price: '$45',
    image: '',
    tags: ['Vintage', 'NBA', '90s'],
    url: 'https://www.depop.com/morethanjordans/',
  },
  {
    id: 'depop-2',
    title: 'Y2K Graphic Zip-Up Hoodie',
    price: '$60',
    image: '',
    tags: ['Streetwear', 'Y2K'],
    url: 'https://www.depop.com/morethanjordans/',
  },
];

const ebayItems = [
  {
    id: 'ebay-1',
    title: 'Soul Vinyl Record',
    price: '$38',
    image: '',
    tags: ['Vinyl', 'Soul', 'Classic'],
    url: 'https://www.ebay.com/',
  },
  {
    id: 'ebay-2',
    title: 'Polaroid 600 Instant Camera',
    price: '$90',
    image: '',
    tags: ['Film', 'Camera', 'Collectible'],
    url: 'https://www.ebay.com/',
  },
];

const reviews = [
  `"Item exactly as described & shipped super fast."`,
  `"Great communication and super clean packaging."`,
  `"Pieces feel like they were picked just for me."`,
];

export default function Shop() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Shop — Jordan Bautista-Lazo</title>
        <meta
          name="description"
          content="Curated vintage, vinyl, and artifacts via Depop and eBay."
        />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Shop</h1>
          <p className={styles.subtitle}>
            Curated pieces from my world — fulfilled through Depop &amp; eBay.
          </p>
          <div className={styles.profileButtonWrap}>
            <a href="/" className={styles.profileButton}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
                alt="Profile"
                className={styles.profileIcon}
              />
              <span>My Profile</span>
            </a>
          </div>
        </header>

        {/* TWO-COLUMN LAYOUT: DEPOP (LEFT) / EBAY (RIGHT) */}
        <section className={styles.shopGrid}>
          {/* DEPOP COLUMN */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.columnLabel}>Depop</div>
              <p className={styles.columnBlurb}>
                Streetwear, tees, hoodies, and the fits I’d wear out on a Friday.
              </p>
            </div>

            <div className={styles.itemGrid}>
              {depopItems.map((item) => (
                <article key={item.id} className={styles.card}>
                  {item.image ? (
                    <div className={styles.imageWrap}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.cardImage}
                      />
                    </div>
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span className={styles.placeholderText}>Photo coming soon</span>
                    </div>
                  )}
                  <div className={styles.cardBody}>
                    <h2 className={styles.itemTitle}>{item.title}</h2>
                    <p className={styles.price}>{item.price}</p>
                    <div className={styles.tags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewButton}
                    >
                      View on Depop
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.footerButtonWrap}>
              <a
                href="https://www.depop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.outlineButton}
              >
                View Full Depop Shop
              </a>
            </div>
          </div>

          {/* EBAY COLUMN */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.columnLabel}>eBay</div>
              <p className={styles.columnBlurb}>
                Vinyl, cameras, and pieces that feel like artifacts more than items.
              </p>
            </div>

            <div className={styles.itemGrid}>
              {ebayItems.map((item) => (
                <article key={item.id} className={styles.card}>
                  {item.image ? (
                    <div className={styles.imageWrap}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.cardImage}
                      />
                    </div>
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span className={styles.placeholderText}>Photo coming soon</span>
                    </div>
                  )}
                  <div className={styles.cardBody}>
                    <h2 className={styles.itemTitle}>{item.title}</h2>
                    <p className={styles.price}>{item.price}</p>
                    <div className={styles.tags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewButton}
                    >
                      View on eBay
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.footerButtonWrap}>
              <a
                href="https://www.ebay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.outlineButton}
              >
                View Full eBay Listings
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS / SOCIAL PROOF */}
        <section className={styles.reviewsSection}>
          <h2 className={styles.reviewsTitle}>What people say</h2>
          <div className={styles.reviewsGrid}>
            {reviews.map((review, idx) => (
              <div key={idx} className={styles.reviewCard}>
                <p className={styles.reviewText}>{review}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
