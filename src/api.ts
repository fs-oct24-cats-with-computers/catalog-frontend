import { Product } from './types/Product';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('src/api.ts');
  return response.json();
}
