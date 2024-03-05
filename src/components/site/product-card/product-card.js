import Image from 'next/image';
import styles from './product-card.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.products}>
      <div className={styles.product}>
        <Image src={product.image} alt={product.title} width={300} height={300} />
        <h2>{product.title}</h2>
        <div className={styles.footer}>
          <p>{product.price} kr</p>
          <button>Køb</button>
        </div>
      </div>
    </div>
  );
}
