import styles from './contactus.module.css'; // CSS module for styling
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        We would love to hear from you! Please fill out the form below or reach us through the contact information provided.
      </p>

      <section className={styles.contactFormSection}>
        <h2 className={styles.subtitle}>Get in Touch</h2>
        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" id="name" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone</label>
            <input type="tel" id="phone" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" className={styles.textarea} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </section>

      <section className={styles.contactInfoSection}>
        <h2 className={styles.subtitle}>Contact Information</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <Image src="/images/email-icon.png" alt="Email" width={24} height={24} />
            <p>info@linkfolio.com</p>
          </div>
          <div className={styles.contactItem}>
            <Image src="/images/phone-icon.png" alt="Phone" width={24} height={24} />
            <p>(123) 456-7890</p>
          </div>
          <div className={styles.contactItem}>
            <Image src="/images/location-icon.png" alt="Location" width={24} height={24} />
            <p>123 Linkfolio St, Portfolio City, PC 12345</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
