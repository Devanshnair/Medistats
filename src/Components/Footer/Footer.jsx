import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 MediStats. All rights reserved.</p>
      <nav className={styles.footerNav}>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </footer>
  )
}