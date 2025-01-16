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

  let currentTechSpecs;
  let currentImages;

  if (currentPhone) {
    currentTechSpecs = techSpecsCase(currentPhone, TECH_TABLE_KEYS);
    currentImages = currentPhone?.images.map((image) => '../' + image);
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
    <>
      {currentPhone && (
        <div className="product-page container">
          <Breadcrumbs />
          <Back />
          <h2 className="product-page__title">{currentPhone.name}</h2>
          <section className="product-page__section">
            <div className="section-first">
              <div className="section-first__gallery">
                <PhotosGallery images={currentImages} />
              </div>
              <div className="section-first__variants">
                <div className="variants">Variants Block</div>
              </div>
            </div>

            <div className="section-second">
              <div className="section-second__about">
                <h3 className="section__title">About</h3>
                <div className="section__divider"></div>
                <About description={currentPhone.description} />
              </div>

              <div className="section-second__tech">
                <h3 className="section__title">Tech specs</h3>
                <div className="section__divider"></div>
                <TechSpecs techSpecsObj={currentTechSpecs} />
              </div>
            </div>
          </section>

          <div className="product-page__slider">
            <div>Recommended</div>
          </div>
        </div>
      )}
    </>
  );
};
