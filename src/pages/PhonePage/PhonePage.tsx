import './PhonePage.scss';
import { About } from '../../components/About';
import { Phone } from '../../types/Phone';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductDetails } from '../../api';
import { NotFoundPage } from '../NotFoundPage';

export const PhonePage = () => {
  const [currentPhone, setCurrentPhone] = useState<Phone | null>(null);
  const [error, setError] = useState('');

  const { phoneId } = useParams();

  useEffect(() => {
    setError('');
    getProductDetails('phones')
      .then((phones) => {
        const foundPhone = phones.find((phone) => phone.id === phoneId);
        if (foundPhone) {
          setCurrentPhone(foundPhone);
        } else {
          setError('Wrong phone id!');
        }
      })
      .catch((error) => setError(error));
  }, [phoneId]);

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div className="product-page container">
        <section className="product-section product-section--about">
          <h3 className="product-section__title">About</h3>
          <div className="product-section__divider"></div>
          <About description={currentPhone?.description} />
        </section>
      </div>
    </>
  );
};
