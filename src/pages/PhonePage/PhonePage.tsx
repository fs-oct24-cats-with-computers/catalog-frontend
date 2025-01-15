import './PhonePage.scss';
import { About } from '../../components/About';
import { Phone } from '../../types/Phone';
import { TECH_TABLE_KEYS, techSpecsCase } from '../../utils/techSpecsCase';
import { TechSpecs } from '../../components/TechSpecs';
import { PhotosGallery } from '../../components/PhotosGallery';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Back } from '../../components/Back';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductDetails } from '../../api';
import { NotFoundPage } from '../NotFoundPage';

export const PhonePage = () => {
  const [currentPhone, setCurrentPhone] = useState<Phone | null>(null);
  const [error, setError] = useState('');

  const { phoneId } = useParams();
  let testTechSpecs;
  if (currentPhone) {
    testTechSpecs = techSpecsCase(currentPhone, TECH_TABLE_KEYS);
  }

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
    <div className="product-page container">
      <Breadcrumbs />
      <Back />
      <section className="product-section product-section--gallery">
        <PhotosGallery images={testProduct.images} />
      </section>
      <section className="product-section product-section--variants">
        <div>Variants Block</div>
      </section>
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

      <section className="product-section product-section--recommended">
        <div>Recommended</div>
      </section>
    </div>
  );
};
