import ProjectCard from '../components/projectCard';
import projects from '../data/projects';
import styles from './projects.module.css';
import umgImg from '../images/umgintern.jpg';

export default function Projects() {
  const projects = [
    {
      title: "Legal Automation Platform",
      blurb: "Automated lead scoring, email workflows, and case intake using Python, OpenAI, and Django.",
      tech: ["Python", "Django", "OpenAI API", "Celery", "AWS"],
      image: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/playwright-y50bnthygb3rvsppvkm9e.png/playwright-q55xzpenhgjsodksybst.png?_a=DATAg1AAZAA0", // replace
    },
    {
      title: "SpotiPy Recommended Playlist Script",
      blurb: "Generates seeded playlists using 1-5 artists to create a unique 50-song playlist",
      tech: ["Python", "Postman", "SpotiPy"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",
    },
    {
      title: "Next.js Portfolio Site",
      blurb: "Minimalist personal website designed for clarity, speed, and creative identity expression.",
      tech: ["Next.js", "React", "Tailwind"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      title: "Former Web Development Internship",
      blurb: "Built 3 artist's websites on Wordpress for Universal Music Group signed artists.",
      tech: ["Wordpress", "CSS Frameworks","Squarespace"],
      image: umgImg,
    }
  ];

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>Project History</h1>
        <div className={styles.profileButtonWrap}>
          <a href="/" className={styles.profileButton}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" 
              alt="Profile Icon" 
              className={styles.profileIcon}
            />
            <span>My Profile</span>
          </a>
        </div>
        <div className={styles.projectList}>
          {projects.map((p, i) => (
            <div key={i} className={styles.projectCard}>
              
              {/* LEFT SIDE — TECH STACK */}
              <div className={styles.techColumn}>
                {p.tech.map((t, i) => (
                  <span key={i} className={styles.techBubble}>{t}</span>
                ))}
              </div>

              {/* CENTER — TITLE + BLURB */}
              <div className={styles.centerColumn}>
                <h1 className={styles.projectTitle}>{p.title}</h1>
                <p className={styles.projectBlurb}>{p.blurb}</p>
              </div>

              {/* RIGHT SIDE — IMAGE */}
              <div className={styles.imageColumn}>
                <img
                  src={typeof p.image === "string" ? p.image : p.image.src}
                  alt={p.title}
                  width={260}
                  height={165}
                  className={styles.projectImage}
                />
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
}