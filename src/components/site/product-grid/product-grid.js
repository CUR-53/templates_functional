import styles from './product-grid.module.css';
import { getProducts } from '@/lib/data.service';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();

      setProducts(filteredData);
    };

    getData();
  }, []);

  return (
    <div className={styles.productGrid}>
      {products.map((ProductCard) => {
        return <ProductCard key={ProductCard._id} product={ProductCard} />;
      })}
    </div>
  );
}
