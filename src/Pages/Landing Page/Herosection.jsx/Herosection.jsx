import { useEffect, useState } from 'react'
import styles from './Herosection.module.css'
import { BiSearchAlt } from "react-icons/bi"
import { AnimatePresence, motion } from 'framer-motion'
import { baseURL } from '../../../App'

const searchWords = [
  'Dolo',
  'Crocin',
  'Aspirin',
  'Paracetamol',
  'Ibuprofen',
  'Cetrizine',
  'Omeprazole',
  'Metformin',
  'Amoxicillin',
  'Vitamin C',
]

const Herosection = () => {
  const [query, setQuery] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % searchWords.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log('Searching for:', query)
    const search_term = query;

    try {
      const response = await fetch(`${baseURL}/api/search/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search_term })
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log("Error occurred", err)
    }
  }

  return (
    <motion.div 
      className={styles.heroSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img 
        src='https://www.truemeds.in/_next/static/media/HomepageLeftImg.8e1cc839.svg' 
        alt='Left decoration' 
        style={{position:"absolute", left:"0"}}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.img 
        src='https://www.truemeds.in/_next/static/media/HomepageRightImg.b7f5edfb.svg' 
        alt='Right decoration' 
        style={{position:"absolute", right:"0"}}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.h1 
        className={styles.title}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Say Goodbye to high medicine prices
      </motion.h1>
      <motion.p 
        className={styles.subtitle}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Compare prices and save upto 51%
      </motion.p>
      <motion.div 
        className={styles.searchWrapper}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className={styles.searchTitleWrapper}>
          <h2 className={styles.searchTitle}>What are you looking for?</h2>
          {/* <a href="/upload-prescription" className={styles.uploadLink}>
            <span className={styles.uploadIcon}>📄</span>
            <span  className={styles.uploadLink}>Order with prescription.</span>
            <span className={styles.uploadNow}>UPLOAD NOW &gt;</span>
          </a> */}
        </div>
        <form onSubmit={handleSearch}>
        <div className={styles.searchBarContainer}>
          <motion.div 
            className={styles.searchBar}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <BiSearchAlt size={30} className={styles.searchIcon}/>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
              />
              {!query && (
              <div className={styles.placeholderWrapper}>
                Search for '
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.animatedWord}
                  >
                    {searchWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
                '
              </div>
              )}
            </div>
            <motion.button 
              type="submit" 
              className={styles.searchButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </motion.div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Herosection