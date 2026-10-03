import { motion } from 'framer-motion'
import styles from './Featuresection.module.css'

const FeatureSection = () => {
  const features = [
    {
      title: 'Search simply',
      description: 'Search through 10 lakh medicines in just a few seconds.',
      icon: 'https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Search.svg',
    },
    {
      title: 'Compare confidently',
      description: 'Compare medicine prices from 100s of sites at once.',
      icon: 'https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Compare.svg',
    },
    {
      title: 'Save big',
      description: 'Discover a great deal to book according to your requirements.',
      icon: 'https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Save.svg',
    },
  ]

  return (
    <motion.section 
      className={styles.featureSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index} 
          className={styles.featureCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div 
            className={styles.iconWrapper}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={feature.icon} className={styles.icon} alt={feature.title} />
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {feature.title}
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            {feature.description}
          </motion.p>
        </motion.div>
      ))}
    </motion.section>
  )
}

export default FeatureSection