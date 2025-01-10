import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { Banner } from './components/HomePage/Banner/Banner';
import 'swiper/css';

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Banner />
      <Footer />
    </>
  );
};
