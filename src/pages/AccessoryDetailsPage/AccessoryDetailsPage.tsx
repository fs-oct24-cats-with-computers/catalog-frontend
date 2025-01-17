import { About } from '../../components/About';
import { ProductExpand } from '../../types/ProductExpand';
import { TECH_TABLE_KEYS, techSpecsCase } from '../../utils/techSpecsCase';
import { TechSpecs } from '../../components/TechSpecs';
import { PhotosGallery } from '../../components/PhotosGallery';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Back } from '../../components/Back';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../../api';
import { NotFoundPage } from '../NotFoundPage';
import { Category } from '../../types/Category';
import { Loader } from '../../components/Loader';
import { ProductDetails } from '../../components/ProductDetails';

export const AccessoryDetailsPage = () => {
  const [currentAccessory, setCurrentPhone] = useState<ProductExpand | null>(
    null,
  );
  const [error, setError] = useState('');
  const { accessoryId } = useParams();

  let currentTechSpecs;

  if (currentAccessory) {
    currentTechSpecs = techSpecsCase(currentAccessory, TECH_TABLE_KEYS);
  }

  useEffect(() => {
    setError('');
    getProductById(Category.accessories, accessoryId)
      .then((foundAccessory) => {
        if (foundAccessory) {
          setCurrentPhone(foundAccessory);
        } else {
          setError('Wrong accessory id!');
        }
      })
      .catch((error) => setError(error.message));
  }, [accessoryId]);

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <>
      {!currentAccessory ?
        <Loader />
      : <div className="product container">
          <Breadcrumbs />
          <Back />
          <h2 className="product__title">{currentAccessory.name}</h2>
          <section className="product__section">
            <div className="section section--first">
              <div className="section__gallery">
                <PhotosGallery images={currentAccessory.images} />
              </div>
              <div className="section__details">
                <ProductDetails product={currentAccessory} />
              </div>
            </div>

            <div className="section section--second">
              <div className="section__about">
                <h3 className="section__title">About</h3>
                <div className="section__divider"></div>
                <About description={currentAccessory.description} />
              </div>

              <div className="section__tech">
                <h3 className="section__title">Tech specs</h3>
                <div className="section__divider"></div>
                <TechSpecs techSpecsObj={currentTechSpecs} />
              </div>
            </div>
          </section>

          <div className="product__slider">
            <div>Recommended</div>
          </div>
        </div>
      }
    </>
  );
};
