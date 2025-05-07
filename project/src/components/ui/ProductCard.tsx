import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Map product categories to display names and badge styles
  const categoryInfo = {
    fertilizer: {
      name: 'Fertilizer',
      badgeClass: 'badge-fertilizer'
    },
    pesticide: {
      name: 'Pesticide',
      badgeClass: 'badge-pesticide'
    },
    seed: {
      name: 'Seed',
      badgeClass: 'badge-seed'
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute top-2 right-2">
          <span className={`badge ${categoryInfo[product.category].badgeClass}`}>
            {categoryInfo[product.category].name}
          </span>
        </div>
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded-md font-medium transform -rotate-12">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-gray-800">{product.name}</h3>
        <p className="text-primary-700 font-medium mb-2">
          {formatPrice(product.price)}
        </p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {product.inStock ? `${product.quantity} available` : 'Restocking soon'}
          </span>
          <Link 
            to={`/products/${product.id}`} 
            className="btn btn-primary py-1 px-3 text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;