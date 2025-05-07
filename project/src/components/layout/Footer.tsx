import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">KonaweAgri</span>
            </div>
            <p className="text-gray-300 mb-4">
              Supporting Konawe district farmers with quality agricultural supplies and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/complaints" className="text-gray-300 hover:text-white transition-colors">Submit Complaint</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">Register</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=fertilizer" className="text-gray-300 hover:text-white transition-colors">Fertilizers</Link>
              </li>
              <li>
                <Link to="/products?category=pesticide" className="text-gray-300 hover:text-white transition-colors">Pesticides</Link>
              </li>
              <li>
                <Link to="/products?category=seed" className="text-gray-300 hover:text-white transition-colors">Seeds</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">Jl. Pertanian No. 123, Konawe District, Southeast Sulawesi, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+62 821 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@konaweagri.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} KonaweAgri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;