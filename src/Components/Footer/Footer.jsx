import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerSection}>
        <h4>MediStats</h4>
        <p>Making healthcare more affordable</p>
      </div>
      <div className={styles.footerSection}>
        <h4>Quick Links</h4>
        <ul>
          <li>About Us</li>
          <li>How It Works</li>
          <li>Partner With Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h4>Legal</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Disclaimer</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h4>Contact Us</h4>
        <p>medistatssopport@gmail.com</p>
        <p>+91 9899773664</p>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>&copy; 2024 MediStats. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
