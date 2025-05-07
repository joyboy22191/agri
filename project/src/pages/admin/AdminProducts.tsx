import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import ProductCard from '../../components/ui/ProductCard';
import { useProducts } from '../../context/ProductContext';

const AdminProducts = () => {
  const { products } = useProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Manage Products" />
      <div className="mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add New Product
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} isAdmin={true} />
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;