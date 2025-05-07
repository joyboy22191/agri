import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import ProductCard from '../../components/ui/ProductCard';
import { useProducts } from '../../context/ProductContext';

const ProductsPage = () => {
  const { products } = useProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Our Products" 
        description="Browse through our collection of high-quality products"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;