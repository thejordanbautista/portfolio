import Image from 'next/image';
import styles from './Bio.module.css';

export default function Bio() {
  return (
    <section className={styles.bioContainer}>
      {/* Profile Image */}
      <div className={styles.imageContainer}>
        <Image
          src="https://media.licdn.com/dms/image/v2/C4E03AQFl2lZNKcRTug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668118594192?e=1736380800&v=beta&t=x65k6TsoM4OA85ifxZvoqOYATkRz36WS0OvHKa7ImmE"
          alt="Jordan Bautista-Lazo"
          width={192}
          height={192}
          className={styles.profileImage}
        />
      </div>
      {/* Bio Text */}
      <div className={styles.textContainer}>
        <h1 className="text-3xl font-bold mb-2">'hello world :-)'</h1>
        <p className="text-lg text-gray-700">
        Hey!! I’m Jordan Bautista-Lazo, a computer science grad from Portland, OR—proudly Mexican and Native American. I’m all about making the complicated simple, whether it’s making tech easy for everyone to understand or turning project management puzzles into clear, actionable steps. That drive to break things down and make them accessible is what keeps me motivated—finding creative ways to bridge gaps and make sure everyone’s on the same page.
        <br></br><br></br>
Now, I am based in LA, working as a Technology Coordinator at Arellano Associates, supporting major city projects in community outreach. On the side, I co-run a software solutions business, building everything from websites to automation scripts for clients across the country.
        </p>
      </div>
    </section>
  );
}
