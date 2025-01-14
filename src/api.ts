import { Phone } from './types/Phone';
import { Product } from './types/Product';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('../public/api/products.json');
  return response.json();
}

export async function getProductDetails(category: string): Promise<Phone[]> {
  const response = await fetch(`../api/${category}.json`);
  return response.json();
}
