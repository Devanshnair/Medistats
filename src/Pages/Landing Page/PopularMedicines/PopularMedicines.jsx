'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './PopularMedicines.module.css'
import { Link } from 'react-router-dom'
import doloImg from '../../../assets/dolo.png'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const Section = ({ children, className }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const PopularMedicineCard = ({ medicine }) => {
  const savings = ((medicine.mrp - medicine.bestPrice) / medicine.mrp * 100).toFixed(1)
  
  return (
    <div className={styles.medicineCard}>
      <div className={styles.savingsBadge}>Save {savings}%</div>
      <div className={styles.medicineImage}>
        <img src={medicine.img} alt={medicine.name} />
      </div>
      <Link to={'/details/dolo'} className={styles.medicineName}>{medicine.name}</Link>
      <p className={styles.medicineDesc}>{medicine.description}</p>
      <div className={styles.priceContainer}>
        <div className={styles.priceInfo}>
          <span className={styles.mrp}>MRP: ₹{medicine.mrp}</span>
          <span className={styles.bestPrice}>₹{medicine.bestPrice}</span>
        </div>
        <span className={styles.seller}>Best price on {medicine.bestSeller}</span>
      </div>
      <button className={styles.compareButton}>Compare Prices</button>
    </div>
  )
}

const PopularMedicines = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const popularMedicines = [
    {
      name: "Dolo 650mg",
      description: "Paracetamol Tablets",
      img: doloImg,
      mrp: 30,
      bestPrice: 26.50,
      bestSeller: "NetMeds",
    },
    {
      name: "Montair LC Syrup",
      description: "Allergy & Asthma Relief",
      img: "https://onemg.gumlet.io/cropped/zhd8fv9gmxscys86uumw.jpg",
      mrp: 165,
      bestPrice: 142.50,
      bestSeller: "1mg",
    },
    {
      name: "Azithral 500",
      description: "Antibiotic Tablet",
      img: "https://onemg.gumlet.io/935e2ce7aae042d284dfab28341e2321.jpg",
      mrp: 89,
      bestPrice: 75.65,
      bestSeller: "1mg",
    },
    {
      name: "Cetrizine",
      description: "Allergy Relief",
      img: "https://onemg.gumlet.io/cropped/fvehus3guz9aspoqpma1.jpg",
      mrp: 45,
      bestPrice: 38.25,
      bestSeller: "NetMeds",
    },
    {
      name: "Omez 20",
      description: "Acidity & Heart Burn Relief",
      img: "https://onemg.gumlet.io/utfsn0wodzd7adiv5lfk.jpg",
      mrp: 65,
      bestPrice: 54.20,
      bestSeller: "PharmEasy",
    },
    {
      name: "Crocin Advance",
      description: "Fast Acting Pain Relief",
      img: "https://onemg.gumlet.io/9928cf97b5ed4dcfa8544213d887635b.jpg",
      mrp: 40,
      bestPrice: 34.80,
      bestSeller: "PharmEasy",
    },
  ]

  const maxVisibleCards = 3 
  const maxSlides = popularMedicines.length - maxVisibleCards

  const updateScrollButtons = useCallback(() => {
    setCanScrollLeft(currentSlide > 0)
    setCanScrollRight(currentSlide < maxSlides)
  }, [currentSlide, maxSlides])

  useEffect(() => {
    updateScrollButtons()
  }, [currentSlide, updateScrollButtons])

  const nextSlide = () => {
    if (canScrollRight) {
      setCurrentSlide((prev) => Math.min(prev + 1, maxSlides))
    }
  }

  const prevSlide = () => {
    if (canScrollLeft) {
      setCurrentSlide((prev) => Math.max(prev - 1, 0))
    }
  }

  return (
    <Section className={styles.popularMedicines}>
      <h2 className={styles.sectionHeading}>Popular Medicines</h2>
      <p className={styles.sectionDesc}>
        Most searched and purchased medicines with best available deals
      </p>
      
      <div className={styles.sliderContainer}>
        <button 
          className={`${styles.sliderButton} ${styles.prevButton} ${!canScrollLeft ? styles.disabled : ''}`}
          onClick={prevSlide}
          disabled={!canScrollLeft}
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className={styles.medicineSlider}>
          <motion.div 
            className={styles.sliderTrack}
            animate={{ x: `-${currentSlide * 25}%` }}
            transition={{ type: "tween", ease: "easeInOut" }}
          >
            {popularMedicines.map((medicine, index) => (
              <PopularMedicineCard 
                key={index}
                medicine={medicine}
              />
            ))}
          </motion.div>
        </div>

        <button 
          className={`${styles.sliderButton} ${styles.nextButton} ${!canScrollRight ? styles.disabled : ''}`}
          onClick={nextSlide}
          disabled={!canScrollRight}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </Section>
  )
}

export default PopularMedicines
