import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { UserMenu } from './UserMenu';

export function AuthButton() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse"></div>
    );
  }

  if (user) {
    return <UserMenu />;
  }

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => navigate('/login')}
        className="text-gray-300 hover:text-white font-medium transition-colors"
      >
        Sign In
      </button>
      <button
        onClick={() => navigate('/signup')}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-2 px-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
      >
        Get Started
      </button>
    </div>
  );
}