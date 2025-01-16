import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { ProductCard } from './components/ProductCard/ProductCard';
import { Product } from './types/Product';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { PhotosGallery } from './components/PhotosGallery/PhotosGallery';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import phones from '../public/api/phones.json';

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

const images: string[] = [
  'img/phones/apple-iphone-11/black/00.webp',
  'img/phones/apple-iphone-11/black/01.webp',
  'img/phones/apple-iphone-11/black/02.webp',
  'img/phones/apple-iphone-11/black/03.webp',
  'img/phones/apple-iphone-11/black/04.webp',
];

const phone = phones[77];

export const App = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <ProductDetails product={phone} />
      <PhotosGallery images={images} />
      <ProductCard product={testProduct} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
