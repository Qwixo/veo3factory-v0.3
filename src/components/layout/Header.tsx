import React from 'react';
import { Link } from 'react-router-dom';
import { AuthButton } from '../auth/AuthButton';
import { useAuth } from '../../contexts/AuthContext';
import { getMainProduct } from '../../stripe-config';

export function Header() {
  const { user } = useAuth();
  const product = getMainProduct();

  return (
    <header className="bg-gray-900 border-b border-yellow-400 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
              <span className="text-white">Veo3</span>Factory
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {user ? (
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
            ) : (
              <Link to="/checkout" className="text-gray-300 hover:text-white transition-colors">
                Get {product.name} - ${product.price}
              </Link>
            )}
            <a href="/#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Success Stories
            </a>
            <a href="/#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          <AuthButton />
        </div>
      </div>
    </header>
  );
}