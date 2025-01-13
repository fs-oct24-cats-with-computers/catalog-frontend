import { PicturesSlider } from '../../components/PicturesSlider';
import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <>
      <main className="main">
        <div className="page-container">
          <h1 className="page__title">Welcome to Nice Gadgets store!</h1>
          <PicturesSlider />
          <ProductsSlider />
        </div>
      </main>
    </>
  );
};
