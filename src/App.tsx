import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { ProductCard } from './components/ProductCard/ProductCard';
import { Product } from './types/Product';

const testProduct: Product = {
  id: 1,
  category: 'phones',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.webp',
};
export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ProductCard product={testProduct} />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
