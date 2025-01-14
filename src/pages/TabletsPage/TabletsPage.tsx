import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Product } from '../../types/Product';

const testProduct: Product = {
  id: 143,
  category: 'accessories',
  itemId: 'apple-watch-series-4-40mm-silver',
  name: 'Apple Watch Series 4 40mm Silver',
  fullPrice: 399,
  price: 349,
  screen: "1.57' OLED",
  capacity: '40mm',
  color: 'silver',
  ram: '0.75GB',
  year: 2019,
  image: 'img/accessories/apple-watch-series-4/silver/00.webp',
};

export const TabletsPage = () => {
  return (
    <>
      <div className="tablets-page container">
        <h1 className="page__title">Tablets</h1>
        <ProductCard product={testProduct} />
      </div>
    </>
  );
};
