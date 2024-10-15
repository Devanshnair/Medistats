import { useState } from 'react';
import styles from './Categorysection.module.css';

const categories = [
  {
    name: 'Personal Care',
    icon: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698138109947_1.png&w=240&q=75',
    subcategories: [
      { name: 'Skin Care', image: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698220522992_125.png&w=240&q=75' },
      { name: 'Hair Care', image: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698220590032_127.png&w=240&q=75' },
      { name: 'Baby and Mom Care', image: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698220395323_122.png&w=240&q=75' },
      { name: 'Sexual Wellness', image: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698220487326_123.png&w=240&q=75' },
      { name: 'Oral Care', image: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698220598279_128.png&w=240&q=75' },
      { name: 'Elderly Care', image: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698220496491_124.png&w=240&q=75' },
    ],
  },
  {
    name: 'Health Conditions',
    icon: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698138117087_2.png&w=240&q=75',
    subcategories: [
      { name: 'Fever & Pain', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Cough & Cold', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Digestive Health', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Heart Health', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Bone & Joint Pain', image: '/placeholder.svg?height=100&width=100' },
    ],
  },
  {
    name: 'Vitamins & Supplements',
    icon: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698138141109_5.png&w=240&q=75',
    subcategories: [
      { name: 'Multivitamins', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Protein Supplements', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Omega & Fish Oil', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Immunity Boosters', image: '/placeholder.svg?height=100&width=100' },
    ],
  },
  {
    name: 'Diabetes Care',
    icon: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698138124558_3.png&w=240&q=75',
    subcategories: [
      { name: 'Blood Glucose Monitors', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Diabetic Medicines', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Sugar Free Foods', image: '/placeholder.svg?height=100&width=100' },
    ],
  },
  {
    name: 'Healthcare Devices',
    icon: 'https://www.truemeds.in/_next/image?url=https%3A%2F%2Fassets.truemeds.in%2FImages%2FHomepageImage%2FPicture_1698138134247_4.png&w=240&q=75',
    subcategories: [
      { name: 'BP Monitors', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Thermometers', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Weighing Scales', image: '/placeholder.svg?height=100&width=100' },
      { name: 'Nebulizers', image: '/placeholder.svg?height=100&width=100' },
    ],
  },
];

const Categorysection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className={styles.categoryGrid}>
      <div className={styles.header}>
        <h2 className={styles.title}>Shop by categories</h2>
        <a href="/all-categories" className={styles.viewAll}>View all</a>
      </div>
      <div className={styles.content}>
        <div className={styles.mainCategories}>
          {categories.map((category) => (
            <button
              key={category.name}
              className={`${styles.categoryButton} ${selectedCategory.name === category.name ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <div style={{position: "relative", height: '5rem'}}>
                <img src={category.icon} alt={category.name} style={{height: '100%', objectFit: 'cover'}} />
              </div>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        <div className={styles.subcategories}>
          {selectedCategory.subcategories.map((subcategory) => (
            <div key={subcategory.name} className={styles.subcategoryCard}>
              <div style={{position: "relative", height: '10rem'}}>
                <img src={subcategory.image} alt={subcategory.name} style={{height: '100%', objectFit: 'cover'}} />
              </div>
              <p>{subcategory.name}</p>
            </div>
          ))}
        </div>
      </div>
      <a href={`/category/${selectedCategory.name.toLowerCase().replace(' ', '-')}`} className={styles.viewAllProducts}>
        View all {selectedCategory.name.toLowerCase()} products &raquo;
      </a>
    </div>
  );
};

export default Categorysection;