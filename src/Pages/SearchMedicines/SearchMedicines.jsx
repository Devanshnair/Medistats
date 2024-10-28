// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import styles from './SearchMedicines.module.css';
// import { useLocation } from 'react-router-dom';
// import { baseURL } from '../../App';
// import { usePrefetch } from '../../Context/PrefetchedContext';

// const SearchResults = () => {
//   const location = useLocation();
//   const search_term = new URLSearchParams(location.search).get('query');
//   const [data, setData] = useState(null);
//   const { prefetchedData } = usePrefetch();
//   console.log('Prefetched Data:', prefetchedData);

//   useEffect(() => {
//     // Check if search_term is valid before fetching data
//     if (!search_term) {
//       console.error("Search term is required.");
//       return; // Exit the effect if search_term is not provided
//     }

//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${baseURL}/api/search/`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ search_term }) // Wrap search_term in an object
//         });

//         const responseData = await response.json();

//         // Log the entire data response
//         console.log('Fetched Data:', responseData);

//         // Access the array from the response
//         const fetchedData = responseData.data; // Access the data array

//         // Log each item of the array response
//         fetchedData.forEach((item, index) => {
//           console.log(`Data for index ${index}:`, item);
//         });

//         // Set the fetched data to state
//         setData(fetchedData);

//       } catch (err) {
//         console.log("Error occurred", err);
//       }
//     };

//     fetchData();
//   }, [search_term, prefetchedData]); // Include search_term and prefetchedData as dependencies
  
//   const MedicineCard = ({ medicine, website }) => (
//     <motion.div
//       className={styles.medicineCard}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <img src={medicine.image} alt={medicine.name} className={styles.medicineImage} />
//       <h3 className={styles.medicineName}>{medicine.medicine_name || medicine.name}</h3>
//       {/* Handle price formatting properly */}
//       <p className={styles.medicinePrice}>₹{parseFloat(medicine.price.replace(/\n/g, '').trim()).toFixed(2)}</p>
//       <a href={medicine.first_link_url} target="_blank" rel="noopener noreferrer" className={styles.buyButton}>
//         Buy on {website}
//       </a>
//     </motion.div>
//   );

//   if (!data) {
//     return (
//       <div className={styles.loadingContainer}>
//         <motion.div
//           className={styles.loadingSpinner}
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
//         />
//         <p>Loading results...</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.searchResultsContainer}>
//       <h1 className={styles.searchResultsTitle}>Search Results for "{search_term}"</h1>
//       <div className={styles.resultsGrid}>
//         {data.map((item, index) => {
//           const websites = ['PharmEasy', '1mg', 'Netmeds'];
//           return (
//             <div className={styles.websiteColumn} key={index}>
//               <h2 className={styles.websiteTitle}>{websites[index]}</h2>
//               {item.error ? (
//                 <p className={styles.errorText}>{item.error}</p>
//               ) : (
//                 <MedicineCard medicine={item} website={websites[index]} />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SearchResults;


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './SearchMedicines.module.css';
import { useLocation, Link } from 'react-router-dom';
import { baseURL } from '../../App';
import { usePrefetch } from '../../Context/PrefetchedContext';
import { FileX } from 'lucide-react';

const staticData = [
  {
    website: "PharmEasy",
    medicine_name: "Dolo Paracetamol 650mg Strip Of 15 Tablets",
    price: "28.02",
    first_link_url: "https://pharmeasy.in/online-medicine-order/dolo-650mg-strip-of-15-tablets-44140",
    image: "/src/assets/dolo.png",
  },
  {
    website: "1mg",
    medicine_name: "Dolo 650 Tablet",
    price: "35.24",
    first_link_url: "https://www.1mg.com/drugs/dolo-650-tablet-74467",
    image: "/src/assets/dolo.png",
  },
  {
    website: "Netmeds",
    medicine_name: "Dolo 650mg Tablet",
    price: "30.38",
    first_link_url: "https://www.netmeds.com/prescriptions/dolo-650mg-tablet-15-s",
    image: "/src/assets/dolo.png",
  },
];

const SearchResults = () => {
  const location = useLocation();
  const search_term = new URLSearchParams(location.search).get('query');
  const [data, setData] = useState(staticData);
  const { prefetchedData } = usePrefetch();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const MedicineCard = ({ medicine, website }) => {
    const savings = ((parseFloat(medicine.mrp || medicine.price) - parseFloat(medicine.bestPrice || medicine.price)) / parseFloat(medicine.mrp || medicine.price) * 100).toFixed(1);
    
    return (
      <motion.div 
        className={styles.medicineCard}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        variants={itemVariants}
      >
        <div className={styles.savingsBadge}>Save {savings}%</div>
        <div className={styles.medicineImage}>
          <motion.img
            src={medicine.image}
            alt={medicine.medicine_name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <Link to={`/details/${medicine.medicine_name}`} className={styles.medicineName}>
          {medicine.medicine_name}
        </Link>
        <p className={styles.medicineDesc}>
          {medicine.description || "Generic medicine used for fever and pain relief"}
        </p>
        <div className={styles.priceContainer}>
          <div className={styles.priceInfo}>
            <span className={styles.mrp}>
              MRP: ₹{(parseFloat(medicine.mrp || medicine.price) * 1.2).toFixed(2)}
            </span>
            <span className={styles.bestPrice}>
              ₹{parseFloat(medicine.price).toFixed(2)}
            </span>
          </div>
          <span className={styles.seller}>Best price on {website}</span>
        </div>
        <motion.a
          href={medicine.first_link_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.compareButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Compare Prices
        </motion.a>
      </motion.div>
    );
  };

  if (!data) {
    return (
      <motion.div 
        className={styles.loadingContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className={styles.loadingSpinner}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className={styles.loadingText}>Loading results...</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={styles.searchResultsContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className={styles.searchResultsTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Search Results for <i style={{fontWeight: 400, fontSize: '1.4rem'}}>{search_term}</i>
      </motion.h1>
      <motion.div className={styles.resultsGrid} variants={containerVariants}>
        {data.map((item, index) => (
          <div key={index} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h4 style={{fontSize: '1.8rem', marginBottom: '3rem', fontWeight: '500'}}>{item.website}</h4>
            <MedicineCard medicine={item} website={item.website} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SearchResults;