import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import PageHeader from '../../components/ui/PageHeader';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title={product.name}
        description={product.description}
      />
      
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <p className="mt-4 text-2xl font-bold text-gray-900">${product.price}</p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">Product Details</h3>
                <ul className="mt-2 space-y-2">
                  {product.details?.map((detail, index) => (
                    <li key={index} className="text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;