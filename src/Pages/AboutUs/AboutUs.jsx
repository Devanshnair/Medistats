'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './AboutUs.module.css'
import { Phone, MapPin, Mail } from 'lucide-react'

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={styles.container}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About MediStats</h1>
        <p>Your Medicine Price Comparison Tool</p>
      </motion.header>

      <main className={styles.main}>
        <motion.section
          className={styles.about}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.aboutContent}>
            <h2>About 10.8</h2>
            <p>MediStats is your go-to platform for comparing medicine prices across popular online pharmacies. We aggregate data from NetMeds, PharmEasy, and 1mg to provide you with the most comprehensive and up-to-date price comparisons.</p>
          </div>
          <motion.div
            className={styles.aboutImage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-27%20214125-qlp6077vrTR1UmHm6Ec6c3scuQDhyK.png" alt="About MediStats" />
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.features}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Sharing is Caring</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-27%20214125-qlp6077vrTR1UmHm6Ec6c3scuQDhyK.png" alt="Feature 1" />
              <h3>Real-time Comparisons</h3>
              <p>Get up-to-date price comparisons from leading online pharmacies.</p>
            </div>
            <div className={styles.featureItem}>
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-27%20214125-qlp6077vrTR1UmHm6Ec6c3scuQDhyK.png" alt="Feature 2" />
              <h3>User-friendly Interface</h3>
              <p>Easy-to-use platform for quick medicine searches and comparisons.</p>
            </div>
            <div className={styles.featureItem}>
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-27%20214125-qlp6077vrTR1UmHm6Ec6c3scuQDhyK.png" alt="Feature 3" />
              <h3>Direct Redirection</h3>
              <p>Get redirected to the website with the lowest price for your medication.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className={styles.contact}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>Contact Us</h2>
          <p>Let us know how we can help</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Phone size={24} />
              <span>02 574 9497</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={24} />
              <span>123 MediStats Street, Health City 54321</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={24} />
              <span>info@medistats.com</span>
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p>&copy; 2023 MediStats. All rights reserved.</p>
      </motion.footer>
    </div>
  )
}