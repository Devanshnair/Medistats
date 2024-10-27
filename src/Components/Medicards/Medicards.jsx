import { Link } from 'react-router-dom';
import styles from './Medicards.module.css';

const Medicards = ({
  name,
  manufacturer,
  packageSize,
  price,
  mrp,
  discount,
  image,
  isBest,
  isCheapest,
  substituteDiscount,
  dealProvider,
  dealPrice,
  dealNights,
  dealTotalPrice,
  cancellationDate,
}) => {
  const formatPrice = (value) => {
    return value ? value.toLocaleString() : 'N/A';
  };

  return (
    <div className={styles.medicard}>
      <div className={styles.tags}>
        {isBest && <span className={`${styles.tag} ${styles.best}`}>Best</span>}
        {isCheapest && <span className={`${styles.tag} ${styles.cheapest}`}>Cheapest</span>}
      </div>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <div className={styles.imageContainer}>
            <img src={image} alt={name} width={100} height={100} className={styles.image} />
          </div>
          <div className={styles.details}>    
            <Link to={'/details'} style={{textDecoration: 'none'}}>
              <h2 className={styles.name}>{name}</h2>
            </Link>
            <p className={styles.manufacturer}>{manufacturer}</p>
            <p className={styles.packageSize}>{packageSize}</p>
            <div className={styles.pricing}>
              <span className={styles.price}>₹{price.toFixed(2)}</span>
              <span className={styles.mrp}>MRP ₹{mrp.toFixed(2)}</span>
              <span className={styles.discount}>{discount}% OFF</span>
            </div>
          </div>
        </div>
        {dealProvider && (
          <div className={styles.rightContent}>
            <div className={styles.dealProvider}>{dealProvider}</div>
            <div className={styles.dealFeatures}>
              {cancellationDate && <p>✓ Free cancellation before {cancellationDate}</p>}
              <p>✓ Breakfast included</p>
            </div>
            <div className={styles.dealPricing}>
              <span className={styles.dealPrice}>₹{formatPrice(dealPrice)}</span>
              {dealNights && dealTotalPrice && (
                <span className={styles.dealNights}>
                  {dealNights} nights for ₹{formatPrice(dealTotalPrice)}
                </span>
              )}
            </div>
            <button className={styles.viewDealButton}>View Deal &gt;</button>
          </div>
        )}
      </div>
      {substituteDiscount > 0 && (
        <div className={styles.substitute}>
          <span className={styles.substituteIcon}>%</span>
          Get Substitute at {substituteDiscount.toFixed(2)}% CHEAPER
          <span className={styles.arrow}>&gt;</span>
        </div>
      )}
    </div>
  );
};

export default Medicards