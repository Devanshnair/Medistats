import { useState } from 'react';
import { ShoppingCart, ExternalLink, Package, Plus, Minus, Trash2 } from 'lucide-react';
import styles from './Cart.module.css';

const MedicineCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Dolo 650mg",
      quantity: 1,
      image: "/src/assets/dolo.png",
      unitPrice: 28.02,
      deals: [
        { vendor: "1mg", price: 33.2, link: "https://www.1mg.com/drugs/dolo-650-tablet-74467" },
        { vendor: "Netmeds", price: 30.3, link: "https://www.netmeds.com/prescriptions/dolo-650mg-tablet-15-s" },
        { vendor: "Pharmeasy", price: 28.02, link: "https://pharmeasy.in/online-medicine-order/dolo-650mg-strip-of-15-tablets-44140" }
      ]
    },
    // {
    //   id: 2,
    //   name: "Crocin 500mg",
    //   quantity: 1,
    //   image: "https://onemg.gumlet.io/9928cf97b5ed4dcfa8544213d887635b.jpg",
    //   unitPrice: 4.99,
    //   deals: [
    //     { vendor: "Netmeds", price: 4.99, link: "/Netmeds" },
    //     { vendor: "1mg", price: 4.49, link: "/1mg" },
    //     { vendor: "Pharmeasy", price: 4.99, link: "/pharmeasy" }
    //   ]
    // }
  ]);

  const getBestDealForItem = (deals) => {
    return deals.reduce((best, current) => 
      current.price < best.price ? current : best
    );
  };

  const calculatePackageDeals = () => {
    const vendors = ["1mg", "Netmeds", "Pharmeasy"];
    return vendors.map(vendor => ({
      vendor,
      totalPrice: cart.reduce((sum, item) => {
        const vendorDeal = item.deals.find(deal => deal.vendor === vendor);
        return sum + (vendorDeal.price * item.quantity);
      }, 0)
    })).sort((a, b) => a.totalPrice - b.totalPrice);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const bestDeal = getBestDealForItem(item.deals);
      return total + (bestDeal.price * item.quantity);
    }, 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Your Cart</h1>
        <div className={styles.cartCount}>
          <ShoppingCart className={styles.cartIcon} />
          <span>{cart.length} items</span>
        </div>
      </div>

      <div className={styles.medicinesList}>
        {cart.map((item) => {
          const bestDeal = getBestDealForItem(item.deals);
          
          return (
            <div key={item.id} className={styles.medicineCard}>
              <div className={styles.cardContent}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className={styles.medicineImage}
                />
                <div className={styles.mainContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.medicineInfo}>
                      <h2 className={styles.medicineName}>{item.name}</h2>
                      <div className={styles.quantityControls}>
                        <button 
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className={styles.quantityValue}>{item.quantity}</span>
                        <button 
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </button>
                        <button 
                          className={styles.removeButton}
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className={styles.bestDealBox}>
                      <p className={styles.bestDealLabel}>Best Deal</p>
                      <p className={styles.bestDealPrice}>
                        ₹{(bestDeal.price * item.quantity).toFixed(2)}
                      </p>
                      <p className={styles.bestDealVendor}>{bestDeal.vendor}</p>
                    </div>
                  </div>

                  <div className={styles.vendorButtons}>
                    {item.deals.map((deal) => (
                      <button
                        key={deal.vendor}
                        onClick={() => window.location.href = deal.link}
                        className={styles.vendorButton}
                      >
                        {deal.vendor} - ${(deal.price * item.quantity).toFixed(2)}
                        <ExternalLink className={styles.externalLinkIcon} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {cart.length > 0 ? (
        <>
          <div className={styles.packageDeals}>
            <div className={styles.packageHeader}>
              <Package className={styles.packageIcon} />
              <h2 className={styles.packageTitle}>Best Package Deal</h2>
            </div>
            <div className={styles.dealsList}>
              {calculatePackageDeals().map((deal, index) => (
                <div key={deal.vendor} className={styles.dealRow}>
                  <span className={index === 0 ? styles.bestValue : styles.regularValue}>
                    {deal.vendor}
                    {index === 0 && ' (Best Value)'}
                  </span>
                  <span className={index === 0 ? styles.bestValue : styles.regularValue}>
                    ${deal.totalPrice.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* <div className={styles.paymentSection}>
            <h2 className={styles.paymentTitle}>Payment</h2>
            <p className={styles.subtotal}>
              Subtotal: ${calculateSubtotal().toFixed(2)}
            </p>
            <button className={styles.paymentButton}>
              Proceed to Payment
            </button>
            <div className={styles.paymentMethods}>
              <img src="/api/placeholder/40/25" alt="Visa" className={styles.paymentIcon} />
              <img src="/api/placeholder/40/25" alt="Mastercard" className={styles.paymentIcon} />
              <img src="/api/placeholder/40/25" alt="PayPal" className={styles.paymentIcon} />
            </div>
          </div> */}
        </>
      ) : (
        <div className={styles.emptyCart}>
          <ShoppingCart className={styles.emptyCartIcon} />
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default MedicineCart;