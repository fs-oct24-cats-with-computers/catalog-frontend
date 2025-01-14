import { Product } from './types/Product';

export async function getProducts(): Promise<Product[]> {
<<<<<<< HEAD
  const response = await fetch('../api/products.json');
||||||| parent of 1ac335c (fixed code parts and added disable styles for buttons)
  const response = await fetch('../public/api/products.json');
=======
  const response = await fetch('/api/products.json');
>>>>>>> 1ac335c (fixed code parts and added disable styles for buttons)
  return response.json();
}
