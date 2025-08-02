import React from 'react';
import { AuthButton } from '../auth/AuthButton';

export function Header() {
  return (
    <header className="bg-gray-900 border-b border-yellow-400 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
              <span className="text-white">VIRAL REELS</span> FACTORY
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Success Stories
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          <AuthButton />
        </div>
      </div>
    </header>
  );
}