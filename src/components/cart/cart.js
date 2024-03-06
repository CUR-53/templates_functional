import { useBasket } from '@/context/basket';
import styles from './cart.module.css';
const Cart = () => {
  const { basket, name } = useBasket();

  return (
    <div className={styles.container}>
      basket
      {basket.map((item) => {
        return (
          <div key={item.id}>
            {item.id} - {item.amount}
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
