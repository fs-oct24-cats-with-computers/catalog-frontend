import { Category } from './types/Category';
import { Phone } from './types/Phone';
import { Product } from './types/Product';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('/api/products.json');
  return response.json();
}

export async function getProductsWithDetails(
  category: Category,
): Promise<Phone[]> {
  const response = await fetch(`../api/${category}.json`);
  return response.json();
}

export async function getProductById(
  category: Category,
  id: string | undefined,
): Promise<Phone | null> {
  try {
    const phones = await getProductsWithDetails(category);
    const foundPhone = phones.find((phone) => phone.id === id);
    return foundPhone || null;
  } catch (error) {
    console.error(`Error fetching product from category ${category}:`, error);
    throw new Error('Failed to fetch product.');
  }
}
