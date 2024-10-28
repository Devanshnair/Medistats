import { useState } from 'react';
import styles from './Medicinedetails.module.css';

const bookingOptions = [
  { name: 'Pharmeasy', price: 37.9, logo: '/src/assets/PharmEasy-logo1.png' },
  { name: '1mg', price: 32.43, logo: '/src/assets/1mg-logo.png' },
  { name: 'Netmeds', price: 28.02, logo: '/src/assets/Netmeds-logo.png' },
]

const MedicineDetails = () => {
  const [selectedPackage, setSelectedPackage] = useState('STRIP of 15 Units');
  const [selectedStrength, setSelectedStrength] = useState('650 MG');

  return (
    <div className={styles.container}>
      <div className={styles.productImage}>
        <img 
          src="/src/assets/dolo.png" 
          alt="Dolo 650 Tablet" 
          width={300} 
          height={300}
        />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>Dolo 650 Tablet 15</h1>
        <p className={styles.manufacturer}>Micro Labs Ltd</p>
        <select
          className={styles.packageSelect}
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
        >
          <option value="STRIP of 15 Units">STRIP of 15 Units</option>
          <option value="STRIP of 10 Units">STRIP of 10 Units</option>
        </select>
        <div className={styles.pricing}>
          <span className={styles.mrp}>MRP ₹33.76</span>
          <span className={styles.price}>₹28.02</span>
          <span className={styles.discount}>17% off applied</span>
        </div>
        <button className={styles.addToCart}>Add To Cart</button>
        <p className={styles.delivery}>Get it By 14th Oct</p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <img src="/placeholder.svg?height=20&width=20" alt="Genuine" width={20} height={20} />
            <span>100% genuine medicines</span>
          </div>
          <div className={styles.feature}>
            <img src="/placeholder.svg?height=20&width=20" alt="Secure" width={20} height={20} />
            <span>Safe & secure payments</span>
          </div>
          <div className={styles.feature}>
            <img src="/placeholder.svg?height=20&width=20" alt="Returns" width={20} height={20} />
            <span>15 days Easy returns</span>
          </div>
        </div>
        <div className={styles.composition}>
          <h2>Composition</h2>
          <p>Paracetamol/acetaminophen (650 Mg)</p>
        </div>
        <div className={styles.strength}>
          <h2>Strength:</h2>
          <div className={styles.strengthOptions}>
            <button
              className={`${styles.strengthOption} ${selectedStrength === '650 MG' ? styles.selected : ''}`}
              onClick={() => setSelectedStrength('650 MG')}
            >
              650 MG
            </button>
            <button
              className={`${styles.strengthOption} ${selectedStrength === '500 MG' ? styles.selected : ''}`}
              onClick={() => setSelectedStrength('500 MG')}
            >
              500 MG
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bookingOptionsContainer}>
        <h2 className={styles.bookingTitle}>Choose where to book</h2>
        <div className={styles.bookingOptions}>
          {bookingOptions.map((option) => (
            <div key={option.name} className={styles.bookingOption}>
              <div className={styles.optionInfo}>
                <img src={option.logo} alt={option.name} width={80} height={30} className={styles.optionLogo} />
                <span className={styles.bookingPrice}>₹{option.price.toLocaleString()}</span>
              </div>
              <button className={styles.bookButton}>
                Visit Site
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;