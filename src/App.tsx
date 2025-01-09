import { Outlet } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <Outlet />

      <Footer />
    </>
  );
};
