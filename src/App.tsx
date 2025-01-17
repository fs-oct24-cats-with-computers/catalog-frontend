import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';

// import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
// import { PhotosGallery } from './components/PhotosGallery/PhotosGallery';
// import { ProductDetails } from './components/ProductDetails/ProductDetails';
// import phones from '../public/api/phones.json';

// const images: string[] = [
//   'img/phones/apple-iphone-11/black/00.webp',
//   'img/phones/apple-iphone-11/black/01.webp',
//   'img/phones/apple-iphone-11/black/02.webp',
//   'img/phones/apple-iphone-11/black/03.webp',
//   'img/phones/apple-iphone-11/black/04.webp',
// ];
// const phone = phones[55];

export const App = () => {
  return (
    <>
      <Header />
      {/* 
      <Breadcrumbs />
      <ProductDetails product={phone} />
      <PhotosGallery images={images} /> */}
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
