import { Product } from './types/Product';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('/api/products.json');
  return response.json();
}
