import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <ProtectedRoute
          fallback={
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
              <div className="text-center max-w-2xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-yellow-400 mb-4">
                  Viral Reels Factory
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Your complete AI automation system for viral social media content
                </p>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Sign in to access your dashboard and manage your viral automation system.
                  </p>
                  <a 
                    href="/index.html" 
                    className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
                  >
                    View Landing Page
                  </a>
                </div>
              </div>
            </div>
          }
        >
          <Dashboard />
        </ProtectedRoute>
      </div>
    </AuthProvider>
  );
}

export default App;