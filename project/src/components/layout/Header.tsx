import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  Settings, 
  MessageSquare, 
  ShoppingBag, 
  Home, 
  Leaf
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setUserMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-primary-800">KonaweAgri</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary-700 border-b-2 border-primary-500' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`text-base font-medium transition-colors ${
                location.pathname.includes('/products') 
                  ? 'text-primary-700 border-b-2 border-primary-500' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Products
            </Link>
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-primary-600"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fade-in">
                    {user.role === 'admin' ? (
                      <Link 
                        to="/admin" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <Settings className="h-4 w-4 mr-2" />
                          Admin Dashboard
                        </div>
                      </Link>
                    ) : (
                      <Link 
                        to="/dashboard" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <Home className="h-4 w-4 mr-2" />
                          Dashboard
                        </div>
                      </Link>
                    )}
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </div>
                    </Link>
                    <Link 
                      to="/complaints" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        My Complaints
                      </div>
                    </Link>
                    <button 
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      <div className="flex items-center">
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="btn btn-primary animate-fade-in"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-base font-medium px-4 py-2 rounded-md ${
                location.pathname === '/' 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Home
              </div>
            </Link>
            <Link 
              to="/products" 
              className={`text-base font-medium px-4 py-2 rounded-md ${
                location.pathname.includes('/products') 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Products
              </div>
            </Link>
            {user ? (
              <>
                {user.role === 'admin' ? (
                  <Link 
                    to="/admin" 
                    className="text-base font-medium px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      Admin Dashboard
                    </div>
                  </Link>
                ) : (
                  <Link 
                    to="/dashboard" 
                    className="text-base font-medium px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <Home className="h-5 w-5 mr-2" />
                      Dashboard
                    </div>
                  </Link>
                )}
                <Link 
                  to="/profile" 
                  className="text-base font-medium px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Profile
                  </div>
                </Link>
                <Link 
                  to="/complaints" 
                  className="text-base font-medium px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    My Complaints
                  </div>
                </Link>
                <button 
                  className="text-base font-medium px-4 py-2 rounded-md text-red-600 hover:bg-red-50 text-left"
                  onClick={handleLogout}
                >
                  <div className="flex items-center">
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </div>
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Link 
                  to="/login" 
                  className="btn btn-primary text-center"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-outline text-center"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;