import './ProductDetailsPage.scss';
import { About } from '../../components/About';
import { Product } from '../../types/Product';
import { ProductExpand } from '../../types/ProductExpand';
import { TECH_TABLE_KEYS, techSpecsCase } from '../../utils/techSpecsCase';
import { TechSpecs } from '../../components/TechSpecs';
import { PhotosGallery } from '../../components/PhotosGallery';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Back } from '../../components/Back';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById, getProducts } from '../../api';
import { NotFoundPage } from '../NotFoundPage';
import { Category } from '../../types/Category';
import { Loader } from '../../components/Loader';
import { ProductDetails } from '../../components/ProductDetails';
import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';

type Props = {
  type: Category;
};

export const ProductDetailsPage: React.FC<Props> = ({ type }) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [currentProduct, setCurrentProduct] = useState<ProductExpand | null>(
    null,
  );
  const [error, setError] = useState('');
  const { productId } = useParams();
  const [otherProducts, setOtherProducts] = useState<Product[]>([]);

  let currentTechSpecs;

  if (currentProduct) {
    currentTechSpecs = techSpecsCase(currentProduct, TECH_TABLE_KEYS);
  }

  useEffect(() => {
    setError('');

    getProducts().then((products) => {
      setProducts(products);
      const firstRandomProducts = products
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

      const updatedProducts = firstRandomProducts.map((product) => ({
        ...product,
        image: '../' + product.image,
      }));

      setOtherProducts(updatedProducts);
    });

    getProductById(type, productId)
      .then((foundProduct) => {
        if (foundProduct) {
          setCurrentProduct(foundProduct);
        } else {
          setError('Wrong product id!');
        }
      })
      .catch((error) => setError(error.message));
  }, [productId, type]);

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <>
      {!(currentProduct && products) ?
        <Loader />
      : <div className="product container">
          <Breadcrumbs />
          <Back />
          <h2 className="product__title">{currentProduct.name}</h2>
          <section className="product__section">
            <div className="section section--first">
              <div className="section__gallery">
                <PhotosGallery images={currentProduct.images} />
              </div>
              <div className="section__details">
                <ProductDetails
                  product={currentProduct}
                  products={products}
                />
              </div>
            </div>

            <div className="section section--second">
              <div className="section__about">
                <h3 className="section__title">About</h3>
                <div className="section__divider"></div>
                <About description={currentProduct.description} />
              </div>

              <div className="section__tech">
                <h3 className="section__title">Tech specs</h3>
                <div className="section__divider"></div>
                <TechSpecs techSpecsObj={currentTechSpecs} />
              </div>
            </div>
            <div className="product__slider">
              <ProductsSlider
                products={otherProducts}
                title={'You may also like'}
              />
            </div>
          </section>
        </div>
      }
    </>
  );
};
