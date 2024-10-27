'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './AboutUs.module.css'
import { Phone, MapPin, Mail } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>About MediStats</h1>
        <p>Your Medicine Price Comparison Tool</p>
      </motion.header>

      <main className={styles.main}>
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.welcome}>
            <h2>Welcome to Medistats</h2>
            <p>Your trusted resource for comparing and finding the best deals on medicines and healthcare products. We understand the importance of accessible, affordable healthcare.</p>
          </div>
          <motion.div
            className={styles.heroImage}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src="https://www.booking-wp-plugin.com/wp-content/uploads/2020/02/how-pharmacists-and-their-clients-can-benefit-from-online-booking.jpg" alt="MediStats Platform" />
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.infoCards}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.card}>
            <h3>Who We Are</h3>
            <p>We are a team of healthcare and technology enthusiasts dedicated to providing a seamless, transparent experience for people searching for essential medications.</p>
          </div>
          <div className={styles.card}>
            <h3>Our Goal</h3>
            <p>To empower you to make informed decisions about your health and budget. Finding affordable options shouldn't be overwhelming.</p>
          </div>
        </motion.section>

        <motion.section
          className={styles.features}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>What We Offer</h2>
          <div className={styles.featureGrid}>
            <motion.div 
              className={styles.featureItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.featureIcon}>
                <img src="https://img.freepik.com/premium-vector/real-time-data-concept-flat-icon-style-illustration_357500-1564.jpg?semt=ais_hybrid" alt="Real-time Comparisons" />
              </div>
              <h3>Real-time Comparisons</h3>
              <p>Get up-to-date price comparisons from leading online pharmacies.</p>
            </motion.div>
            <motion.div 
              className={styles.featureItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.featureIcon}>
                <img src="https://img.freepik.com/free-vector/music-player-app-user-friendly-interface_23-2148541594.jpg?semt=ais_hybrid" alt="User-friendly Interface" />
              </div>
              <h3>User-friendly Interface</h3>
              <p>Easy-to-use platform for quick medicine searches and comparisons.</p>
            </motion.div>
            <motion.div 
              className={styles.featureItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.featureIcon}>
                <img src="https://img.freepik.com/free-vector/characters-global-communication-concept-illustration_53876-43120.jpg?semt=ais_hybrid" alt="Direct Redirection" />
              </div>
              <h3>Direct Redirection</h3>
              <p>Get redirected to the website with the lowest price for your medication.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className={styles.contact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.contactContent}>
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
                <span>medistats38@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>&copy; 2024 MediStats. All rights reserved.</p>
      </motion.footer>
    </div>
  )
}