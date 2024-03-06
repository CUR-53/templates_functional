'use client';
import { useState, useEffect } from 'react';
import styles from './product-grid.module.css';
import ProductCard from '../product-card/product-card';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div className={styles.productGrid}>
      {products.map((productCard) => {
        return <ProductCard key={productCard._id} product={productCard} />;
      })}
    </div>
  );
}
