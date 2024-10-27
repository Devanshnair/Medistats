import { motion } from 'framer-motion'
import styles from './Websitesection.module.css'

const Websitesection = () => {
  const websites = [
    { name: 'PharmEasy', logo: '/src/assets/PharmEasy-logo1.png' },
    { name: '1mg', logo: '/src/assets/1mg-logo.png' },
    { name: 'Netmeds', logo: '/src/assets/Netmeds-logo.png' },
  ]

  return (
    <motion.div 
      className={styles.websitesContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {websites.map((website, index) => (
        <motion.div 
          key={index} 
          className={styles.websiteItem}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <motion.img
            src={website.logo}
            alt={`${website.name} logo`}
            className={styles.logo}
            style={{
              height: '2rem'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
      ))}
      <motion.div 
        className={styles.moreText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        +100s more
      </motion.div>
    </motion.div>
  )
}

export default Websitesection