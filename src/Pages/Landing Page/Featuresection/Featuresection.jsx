import styles from './featuresection.module.css';

const FeatureSection = () => {
  const features = [
    {
      title: 'Search simply',
      description: 'Search through 5 million hotels in just a few seconds.',
      icon: 'https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Search.svg',
    },
    {
      title: 'Compare confidently',
      description: 'Compare hotel prices from 100s of sites at once.',
      icon: 'https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Compare.svg',
    },
    {
      title: 'Save big',
      description: 'Discover a great deal to book on our partner sites.',
      icon: 'https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Save.svg',
    },
  ];

  return (
    <section className={styles.featureSection}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <img src={feature.icon} className={styles.icon} />
          </div>
          <h2 className={styles.title}>{feature.title}</h2>
          <p className={styles.description}>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;