import { Outlet } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { ProductCard } from './components/ProductCard/ProductCard';

export const App = () => {
  return (
    <>
      <div className="container">
        <ProductCard
          image={'img/phones/apple-iphone-7/black/00.webp'}
          name={'Apple iPhone 11 128GB Black'}
          price={400}
          oldPrice={375}
          screen={'4.7" IPS'}
          capacity={'32GB'}
          ram={'2GB'}
        />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
