'use client';
import { useState, useEffect } from 'react';
import styles from './product-grid.module.css';
import ProductCard from '../product-card/product-card';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('/api/products');
      const productData = await data.json();

      setProducts(productData);
    };

    getData();
  }, []);

  return (
    <div className={styles.productGrid}>
      {products.map((productCard) => {
        console.log(productCard);
        return <ProductCard key={ProductCard._id} product={productCard} />;
      })}
    </div>
  );
}
