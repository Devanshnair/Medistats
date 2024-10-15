import styles from './Navbar.module.css';
import { PiShoppingCartSimple } from "react-icons/pi"
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>MediStats</Link>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/explore" className={styles.navLink}>Explore</Link>
        <Link to="/about" className={styles.navLink}>AboutUs</Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.aboutButton}>
        <span><FiUser className={styles.cartIcon}/> </span>
          <p>Login</p>
        </Link>
        <Link to="/" className={styles.cartButton}>
          <span><PiShoppingCartSimple className={styles.cartIcon}/> </span>
          <p>Cart</p>
        </Link>
      </div>
      
    </nav>
  );
}