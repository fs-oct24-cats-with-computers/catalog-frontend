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

export const TabletDetailsPage = () => {
  const [currentTablet, setCurrentPhone] = useState<ProductExpand | null>(null);
  const [error, setError] = useState('');
  const { tabletId } = useParams();

  let currentTechSpecs;

  if (currentTablet) {
    currentTechSpecs = techSpecsCase(currentTablet, TECH_TABLE_KEYS);
  }

  useEffect(() => {
    setError('');
    getProductById(Category.tablets, tabletId)
      .then((foundTablet) => {
        if (foundTablet) {
          setCurrentPhone(foundTablet);
        } else {
          setError('Wrong phone id!');
        }
      })
      .catch((error) => setError(error.message));
  }, [tabletId]);

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <>
      {!currentTablet ?
        <Loader />
      : <div className="product container">
          <Breadcrumbs />
          <Back />
          <h2 className="product__title">{currentTablet.name}</h2>
          <section className="product__section">
            <div className="section section--first">
              <div className="section__gallery">
                <PhotosGallery images={currentTablet.images} />
              </div>
              <div className="section__details">
                <ProductDetails product={currentTablet} />
              </div>
            </div>

            <div className="section section--second">
              <div className="section__about">
                <h3 className="section__title">About</h3>
                <div className="section__divider"></div>
                <About description={currentTablet.description} />
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
