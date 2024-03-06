'use client';
import Image from 'next/image';
import styles from './product-card.module.css';
import { useBasket } from '@/context/basket';

export default function ProductCard({ product, amount }) {
  const { basket, addToBasket } = useBasket();
  return (
    <div className={styles.products}>
      <div className={styles.product}>
        <Image src={product.image} alt={product.title} width={300} height={300} />
        <h2>{product.title}</h2>
        <div className={styles.footer}>
          <p>{product.price} kr</p>
          <button onClick={() => addToBasket(product._id, amount)}>KØB</button>
        </div>
      </div>
    </div>
  );
}
