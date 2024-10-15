import styles from './Websitesection.module.css';

const Websitesection = () => {
  const websites = [
    { name: 'PharmEasy', logo: '/src/assets/PharmEasy-logo1.png' },
    { name: '1mg', logo: '/src/assets/1mg-logo.png' },
    { name: 'Netmeds', logo: '/src/assets/Netmeds-logo.png' },
  ];

  return (
    <div className={styles.websitesContainer}>
      {websites.map((website, index) => (
        <div key={index} className={styles.websiteItem}>
          <img
            src={website.logo}
            alt={`${website.name} logo`}
            className={styles.logo}
            style={{
                height: '2rem'
              }}
          />
        </div>
      ))}
      <div className={styles.moreText}>+100s more</div>
    </div>
  );
};

export default Websitesection;