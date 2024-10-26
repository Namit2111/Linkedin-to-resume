import styles from './about.module.css'; // CSS module for styling
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to Linkfolio! We are dedicated to revolutionizing how you manage your online presence through innovative tools and services. Our mission is to empower individuals and businesses by providing a seamless platform to create and share their unique portfolios.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Our Mission</h2>
        <p>
          At Linkfolio, our mission is to simplify the process of portfolio creation, enabling users to showcase their work effectively and efficiently. We believe everyone should have access to powerful tools that elevate their online presence.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Our Vision</h2>
        <p>
          Our vision is to become the leading platform for portfolio management, fostering creativity and innovation for individuals and businesses around the world. We aim to create a community where users can share their stories and inspire others.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Our Values</h2>
        <ul className={styles.valuesList}>
          <li>Innovation: We constantly strive to improve and innovate our offerings.</li>
          <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
          <li>Customer Focus: Our customers are at the heart of everything we do.</li>
          <li>Collaboration: We believe in the power of teamwork and collaboration.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Meet the Team</h2>
        <div className={styles.teamContainer}>
          <div className={styles.teamMember}>
            <Image src="/images/member1.jpg" alt="Team Member 1" width={150} height={150} className={styles.teamImage} />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.teamMember}>
            <Image src="/images/member2.jpg" alt="Team Member 2" width={150} height={150} className={styles.teamImage} />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default About;
