import { PicturesSlider } from '../../components/PicturesSlider';
import { ProductsSlider } from '../../components/ProductsSlider/ProductsSlider';
import { Categories } from '../../components/ShopByCategory/ShopByCategory';
import { Product } from '../../types/Product';
import './HomePage.scss';

const productsFromApi: Product[] = [
  {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
  },
  {
    id: 2,
    category: 'phones',
    itemId: 'apple-iphone-7-plus-32gb-black',
    name: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '3GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7-plus/black/00.webp',
  },
  {
    id: 3,
    category: 'phones',
    itemId: 'apple-iphone-8-64gb-gold',
    name: 'Apple iPhone 8 64GB Gold',
    fullPrice: 600,
    price: 550,
    screen: "4.7' IPS",
    capacity: '64GB',
    color: 'gold',
    ram: '2GB',
    year: 2017,
    image: 'img/phones/apple-iphone-8/gold/00.webp',
  },
  {
    id: 4,
    category: 'phones',
    itemId: 'apple-iphone-11-64gb-black',
    name: 'Apple iPhone 11 64GB Black',
    fullPrice: 932,
    price: 880,
    screen: "6.1' IPS",
    capacity: '64GB',
    color: 'black',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/black/00.webp',
  },
  {
    id: 5,
    category: 'phones',
    itemId: 'apple-iphone-11-128gb-yellow',
    name: 'Apple iPhone 11 128GB Yellow',
    fullPrice: 1100,
    price: 1050,
    screen: "6.1' IPS",
    capacity: '128GB',
    color: 'yellow',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/yellow/00.webp',
  },
  {
    id: 6,
    category: 'phones',
    itemId: 'apple-iphone-11-256gb-green',
    name: 'Apple iPhone 11 256GB Green',
    fullPrice: 1172,
    price: 1115,
    screen: "6.1' IPS",
    capacity: '256GB',
    color: 'green',
    ram: '4GB',
    year: 2019,
    image: 'img/phones/apple-iphone-11/green/00.webp',
  },
];

const NEW_MODEL = 'iPhone 11'; // 'iPhone 14'

export const HomePage = () => {
  const hotPricesModels = productsFromApi.sort((a, b) => b.price - a.price);

  const newModels = productsFromApi
    .filter((product) => product.name.includes(NEW_MODEL))
    .sort((a, b) => b.fullPrice - a.fullPrice);

  return (
    <div className="container">
      <div className="page-container">
        <h1 className="page__title">Welcome to Nice Gadgets store!</h1>
        <PicturesSlider />
        <ProductsSlider
          products={hotPricesModels}
          title={'Hot prices'}
        />
        <Categories />
        <ProductsSlider
          products={newModels}
          title={'Brand new models'}
        />
      </div>
    </div>
  );
};

// const [products, setProducts] = useState<Product[]>([]);
// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const productsFromApi = await getProducts('/products.json');
//       setProducts(productsFromApi);
//     }
//     catch (error) {
//       console.log('error', error);
//     }
//   };
//   fetchProducts();
// }, []);
