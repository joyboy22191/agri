import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Leaf, ShieldCheck, Sprout, Zap } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ui/ProductCard';
import { Product } from '../types/product';

const HomePage: React.FC = () => {
  const { products, isLoading } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Get 3 random products to feature
    if (products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setFeaturedProducts(shuffled.slice(0, 3));
    }
  }, [products]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Supporting Konawe Farmers with Quality Agricultural Supplies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Access premium fertilizers, effective pesticides, and high-yield seeds to maximize your farm's productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 text-lg">
                Browse Products
              </Link>
              <Link to="/register" className="btn bg-primary-600 border border-white text-white hover:bg-primary-700 px-6 py-3 text-lg">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            Our Product Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fertilizers */}
            <div className="card p-6 hover:translate-y-[-5px] transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Sprout className="w-8 h-8 text-fertilizer-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Fertilizers</h3>
              <p className="text-gray-600 text-center mb-4">
                High-quality fertilizers specially formulated for Southeast Sulawesi soil conditions.
              </p>
              <Link to="/products?category=fertilizer" className="flex items-center justify-center text-primary-600 font-medium hover:text-primary-800">
                View Fertilizers <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {/* Pesticides */}
            <div className="card p-6 hover:translate-y-[-5px] transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ShieldCheck className="w-8 h-8 text-pesticide-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Pesticides</h3>
              <p className="text-gray-600 text-center mb-4">
                Effective pest control solutions to protect your crops from local pest varieties.
              </p>
              <Link to="/products?category=pesticide" className="flex items-center justify-center text-primary-600 font-medium hover:text-primary-800">
                View Pesticides <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {/* Seeds */}
            <div className="card p-6 hover:translate-y-[-5px] transition-all duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Leaf className="w-8 h-8 text-seed-500" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Seeds</h3>
              <p className="text-gray-600 text-center mb-4">
                High-yield, climate-adapted seeds perfect for the Konawe region's growing conditions.
              </p>
              <Link to="/products?category=seed" className="flex items-center justify-center text-primary-600 font-medium hover:text-primary-800">
                View Seeds <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Featured Products
            </h2>
            <Link to="/products" className="text-primary-600 font-medium hover:text-primary-800 flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose KonaweAgri?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-center">
                Products selected specifically for Konawe district's unique agricultural conditions.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-center">
                All products meet strict quality standards and effectiveness requirements.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Responsive Support</h3>
              <p className="text-gray-600 text-center">
                Quick response to farmer inquiries and concerns through our complaint system.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Sprout className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">Sustainable Practices</h3>
              <p className="text-gray-600 text-center">
                Products and advice that promote sustainable farming practices for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Improve Your Farm's Productivity?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our platform today to access quality agricultural supplies and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn btn-primary px-6 py-3 text-lg">
              Create an Account
            </Link>
            <Link to="/products" className="btn bg-white text-secondary-800 hover:bg-gray-100 px-6 py-3 text-lg">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;