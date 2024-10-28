import Medicard from '../../Components/Medicards/Medicards';
import styles from './ExploreMedicines.module.css';

const medicineData = [
  {
    id: 1,
    name: 'Dolo 650 Tablet 15',
    manufacturer: 'Micro Labs Ltd',
    packageSize: 'Strip of 15 Units',
    price: 28.02,
    mrp: 33.76,
    discount: 17,
    image: '/src/assets/dolo.png',
    isBest: true,
    isCheapest: true,
    substituteDiscount: 44.02,
  },
  {
    id: 2,
    name: 'Dolo 650 Tablet 15',
    manufacturer: 'Micro Labs Ltd',
    packageSize: 'Strip of 15 Units',
    price: 28.02,
    mrp: 33.76,
    discount: 17,
    image: '/src/assets/dolo.png',
    isBest: true,
    isCheapest: true,
    substituteDiscount: 44.02,
  },
  {
    id: 3,
    name: 'Dolo 650 Tablet 15',
    manufacturer: 'Micro Labs Ltd',
    packageSize: 'Strip of 15 Units',
    price: 28.02,
    mrp: 33.76,
    discount: 17,
    image: '/src/assets/dolo.png',
    isBest: true,
    isCheapest: true,
    substituteDiscount: 44.02,
  },
];

const ExploreMedicines = () => {
  return (
    <div className={styles.medicineLists}>
      <h1 className={styles.title}>Showing all results</h1>
      <div className={styles.grid}>
        {medicineData.map((medicine) => (
          <Medicard key={medicine.id} {...medicine} />
        ))}
      </div>
    </div>
  );
};

export default ExploreMedicines