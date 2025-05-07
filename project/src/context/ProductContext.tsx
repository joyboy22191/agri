import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductCategory, ProductFilters } from '../types/product';
import { mockProducts } from '../data/mockData';

interface ProductContextProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  filteredProducts: Product[];
  setFilters: (filters: ProductFilters) => void;
  getProductById: (id: string) => Product | undefined;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFiltersState] = useState<ProductFilters>({
    category: undefined,
    searchTerm: '',
    inStock: undefined,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load initial data
  useEffect(() => {
    const loadProducts = async () => {
      try {
        // In a real app, this would be an API call
        // For demo purposes, we're using mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(mockProducts);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Apply filters whenever filters or products change
  useEffect(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }

    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(term) || 
          product.description.toLowerCase().includes(term)
      );
    }

    if (filters.inStock !== undefined) {
      result = result.filter(product => product.inStock === filters.inStock);
    }

    setFilteredProducts(result);
  }, [filters, products]);

  const setFilters = (newFilters: ProductFilters) => {
    setFiltersState(prev => ({ ...prev, ...newFilters }));
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Math.random().toString(36).substring(2, 9),
    };
    
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, ...updates } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider 
      value={{ 
        products, 
        filteredProducts, 
        isLoading, 
        error, 
        setFilters, 
        getProductById,
        addProduct,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};