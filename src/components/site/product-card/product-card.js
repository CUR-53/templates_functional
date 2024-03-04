import styles from './product-card.module.css';

export default function ProductCard({ products }) {
  return (
    <div className={styles.products}>
      <div className={styles.product}>
        <h2>Title</h2>
        <p>Description</p>
        <p>200kr</p>
      </div>
    </div>
  );
}
