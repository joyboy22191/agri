export type ProductCategory = 'fertilizer' | 'pesticide' | 'seed';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  inStock: boolean;
  quantity: number;
  manufacturer: string;
  applicationMethod?: string;
  dosage?: string;
  bestFor?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  category?: ProductCategory;
  searchTerm?: string;
  inStock?: boolean;
}