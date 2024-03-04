'use client';
import styles from './page.module.css';
import ProductGrid from '@/components/site/product-grid/product-grid';

export default function Home() {
  return (
    <main className={styles.page}>
      <ProductGrid />
    </main>
  );
}
