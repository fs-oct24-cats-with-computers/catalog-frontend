import './PhonePage.scss';
import { About } from '../../components/About';
import { Phone } from '../../types/Phone';
import { TECH_TABLE_KEYS, techSpecsCase } from '../../utils/techSpecsCase';
import { TechSpecs } from '../../components/TechSpecs';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductDetails, getProducts } from '../../api';
import { NotFoundPage } from '../NotFoundPage';
import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';
import { Product } from '../../types/Product';

export const PhonePage = () => {
  const [currentPhone, setCurrentPhone] = useState<Phone | null>(null);
  const [error, setError] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  const { phoneId } = useParams();
  let testTechSpecs;
  if (currentPhone) {
    testTechSpecs = techSpecsCase(currentPhone, TECH_TABLE_KEYS);
  }

  // useEffect(() => {
  //   setError('');
  //   getProductDetails('phones')
  //     .then((phones) => {
  //       const foundPhone = phones.find((phone) => phone.id === phoneId);
  //       if (foundPhone) {
  //         setCurrentPhone(foundPhone);
  //       } else {
  //         setError('Wrong phone id!');
  //       }
  //     })
  //     .catch((error) => setError(error));
  // }, [phoneId]);

  // if (error) {
  //   return <NotFoundPage />;
  // }

  useEffect(() => {
    const fetchDetailsAndProducts = async () => {
      try {
        setError('');
        const phones = await getProductDetails('phones');
        const foundPhone = phones.find((phone) => phone.id === phoneId);

        if (foundPhone) {
          setCurrentPhone(foundPhone);
        } else {
          setError('Wrong phone id!');
          return;
        }

        const products = await getProducts();
        setProducts(products.sort(() => Math.random() - 0.5).slice(0, 10));
      } catch {
        setError('Something went wrong');
      }
    };

    fetchDetailsAndProducts();
  }, [phoneId]);

  if (error) {
    if (error === 'Wrong phone id!') {
      return <NotFoundPage />;
    }
    return <p>{error}</p>;
  }

  return (
    <div className="product-page container">
      <section className="product-section product-section--about">
        <h3 className="product-section__title">About</h3>
        <div className="product-section__divider"></div>
        <About description={currentPhone?.description} />
      </section>

      <section className="product-section product-section--tech-specs">
        <h3 className="product-section__title">Tech specs</h3>
        <div className="product-section__divider"></div>
        <TechSpecs techSpecsObj={testTechSpecs} />
      </section>
      <ProductsSlider
        products={products}
        title={'You may also like'}
      />
    </div>
  );
};
