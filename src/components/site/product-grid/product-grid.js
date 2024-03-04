'use client'
import { useState, useEffect } from 'react';
import styles from './product-grid.module.css';


export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const data = await fetch('/api/products');
      const filteredData = await data.json();

      console.log('F', filteredData)
      setProducts(filteredData);
    };

    getData();
  }, []);

  return (
    <div className={styles.productGrid}>
      {products.map((ProductCard) => {
        console.log('ProductCard', ProductCard)
        return <div key={ProductCard._id}>sadas</div>
      })}
    </div>
  );
}
