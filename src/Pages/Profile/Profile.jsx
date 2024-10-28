import React from 'react';
import styles from './Profile.module.css';

export default function ProfilePage({ name = "John Doe", email = "john@example.com" }) {
  return (
    <div className={styles.container}>

      {/* Main content */}
      <main className={styles.main}>
        <h1 className={styles.title}>You're logged in as</h1>
        
        {/* Profile Container */}
        <div className={styles.profileCard}>
          <div className={styles.profileContent}>
            <div className={styles.avatar}>
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff`} 
                alt={name} 
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.profileInfo}>
              <p className={styles.infoText}><span className={styles.infoLabel}>Name:</span> {name}</p>
              <p className={styles.infoText}><span className={styles.infoLabel}>Email:</span> {email}</p>
            </div>
          </div>
        </div>
        
        {/* "Continue searching for medicines" text */}
        <p className={styles.searchText}>Continue searching for medicines</p>

        {/* Button Container */}
        <div className={styles.buttonCard}>
          <a href="/" className={styles.buttonLink}>
            <button className={styles.button}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Go to Home Page
            </button>
          </a>
        </div>
      </main>
    </div>
  );
}