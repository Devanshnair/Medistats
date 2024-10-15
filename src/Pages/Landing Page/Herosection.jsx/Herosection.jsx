import { useState } from 'react'
import styles from './Herosection.module.css'
import { BiSearchAlt } from "react-icons/bi";

const Herosection = () => {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', query)
  }

  return (
    <div className={styles.heroSection}>
      <img src='https://www.truemeds.in/_next/static/media/HomepageLeftImg.8e1cc839.svg' alt='image' style={{position:"absolute", left:"0"}}/>
      <img src='https://www.truemeds.in/_next/static/media/HomepageRightImg.b7f5edfb.svg' alt='image' style={{position:"absolute", right:"0"}}/>
      <h1 className={styles.title}>Say Goodbye to high medicine prices</h1>
      <p className={styles.subtitle}>Compare prices and save upto 51%</p>
      <div className={styles.searchWrapper}>
          <div className={styles.searchTitleWrapper}>
            <h2 className={styles.searchTitle}>What are you looking for?</h2>
            {/* <a href="/upload-prescription" className={styles.uploadLink}>
              <span className={styles.uploadIcon}>📄</span>
              <span  className={styles.uploadLink}>Order with prescription.</span>
              <span className={styles.uploadNow}>UPLOAD NOW &gt;</span>
            </a> */}
          </div>
          <form onSubmit={handleSearch}>
            <div className={styles.searchBar}>
              <BiSearchAlt size={30} color='#999999' className={styles.searchIcon}/>
              <input
                type="text"
                placeholder="Search for Health Drinks"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>Search</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Herosection