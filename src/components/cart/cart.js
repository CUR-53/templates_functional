import { useBasket } from '@/context/basket';
import styles from './cart.module.css';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { basket, updateBasketItem } = useBasket();
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const getProductByRange = async () => {
      let idRange = basket.map((item) => item.id);

      if (idRange.length > 0) {
        let products = await fetch('api/products?range=' + idRange);
        products = await products.json();

        products.map((product) => {
          let basketAmount = basket.find((item) => item.id === product._id);

          if (basketAmount) {
            product.amount = basketAmount.amount;
          }
        });

        setBasketItems(products);
      }
    };

    getProductByRange();
  }, [basket]);

  const handleQuantityChange = (id, newAmount) => {
    const updatedItems = [...basketItems];
    const itemIndex = updatedItems.findIndex((item) => item._id === id);

    if (itemIndex !== -1) {
      updatedItems[itemIndex].amount = newAmount;
      setBasketItems(updatedItems);
      updateBasketItem(id, newAmount);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Basket</h2>
      {basketItems.map((basketItem) => {
        return (
          <div key={basketItem._id} className={styles.basketItem}>
            <div>{basketItem.title}</div>
            <div>
              <button onClick={() => handleQuantityChange(basketItem._id, basketItem.amount - 1)} disabled={basketItem.amount === 0}>
                <p>-</p>
              </button>
              <span>{basketItem.amount}</span>
              <button onClick={() => handleQuantityChange(basketItem._id, basketItem.amount + 1)}>
                <p>+</p>
              </button>
            </div>
            <div>${(basketItem.price * basketItem.amount).toFixed(2)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
