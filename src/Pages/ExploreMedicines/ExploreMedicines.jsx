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
    id: 7,
    name: 'Disprin Regular',
    manufacturer: 'Reckitt Benckiser',
    packageSize: 'Strip of 10 Tablets',
    price: 15.25,
    mrp: 18.00,
    discount: 15,
    image: 'https://onemg.gumlet.io/cropped/yhl9lmgxhj1pfbtnc0ts.jpg',
    isBest: false,
    isCheapest: false,
    substituteDiscount: 3.00,
  },
  {
    id: 8,
    name: 'Combiflam',
    manufacturer: 'Sanofi India',
    packageSize: 'Strip of 20 Tablets',
    price: 32.75,
    mrp: 39.00,
    discount: 16,
    image: 'https://onemg.gumlet.io/cropped/niowfyzxquufm1i2zqgo.jpg',
    isBest: true,
    isCheapest: false,
    substituteDiscount: 6.25,
  },
  {
    id: 9,
    name: 'Rantac 150',
    manufacturer: 'J. B. Chemicals & Pharmaceuticals Ltd',
    packageSize: 'Strip of 30 Tablets',
    price: 22.90,
    mrp: 28.00,
    discount: 18,
    image: 'https://onemg.gumlet.io/419d569689724b67a70de6d7fad5275f.jpg',
    isBest: false,
    isCheapest: true,
    substituteDiscount: 5.50,
  },
  {
    id: 10,
    name: 'Allegra 120mg',
    manufacturer: 'Sanofi India Ltd',
    packageSize: 'Strip of 10 Tablets',
    price: 85.50,
    mrp: 100.00,
    discount: 14,
    image: 'https://onemg.gumlet.io/fa7427131ec64163b5bbafb529df0736.jpg',
    isBest: true,
    isCheapest: false,
    substituteDiscount: 10.00,
  },
  {
    id: 2,
    name: 'Montair LC Syrup',
    manufacturer: 'Cipla Ltd',
    packageSize: 'Bottle of 60ml',
    price: 142.50,
    mrp: 165.00,
    discount: 14,
    image: 'https://onemg.gumlet.io/cropped/zhd8fv9gmxscys86uumw.jpg',
    isBest: true,
    isCheapest: false,
    substituteDiscount: 10.50,
  },
  {
    id: 3,
    name: 'Azithral 500',
    manufacturer: 'Alembic Pharmaceuticals',
    packageSize: 'Strip of 3 Tablets',
    price: 75.65,
    mrp: 89.00,
    discount: 15,
    image: 'https://onemg.gumlet.io/935e2ce7aae042d284dfab28341e2321.jpg',
    isBest: false,
    isCheapest: true,
    substituteDiscount: 20.00,
  },
  {
    id: 4,
    name: 'Cetrizine',
    manufacturer: 'Dr. Reddy’s Laboratories',
    packageSize: 'Strip of 10 Tablets',
    price: 38.25,
    mrp: 45.00,
    discount: 15,
    image: 'https://onemg.gumlet.io/cropped/fvehus3guz9aspoqpma1.jpg',
    isBest: false,
    isCheapest: false,
    substituteDiscount: 5.00,
  },
  {
    id: 5,
    name: 'Omez 20',
    manufacturer: 'Dr. Reddy’s Laboratories',
    packageSize: 'Strip of 10 Capsules',
    price: 54.20,
    mrp: 65.00,
    discount: 17,
    image: 'https://onemg.gumlet.io/utfsn0wodzd7adiv5lfk.jpg',
    isBest: true,
    isCheapest: false,
    substituteDiscount: 12.50,
  },
  {
    id: 6,
    name: 'Crocin Advance',
    manufacturer: 'GlaxoSmithKline Pharmaceuticals',
    packageSize: 'Strip of 20 Tablets',
    price: 34.80,
    mrp: 40.00,
    discount: 13,
    image: 'https://onemg.gumlet.io/9928cf97b5ed4dcfa8544213d887635b.jpg',
    isBest: false,
    isCheapest: true,
    substituteDiscount: 6.00,
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