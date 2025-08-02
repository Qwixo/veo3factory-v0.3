import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { SuccessPage } from './components/checkout/SuccessPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/checkout" element={
              <>
                <Header />
                <CheckoutPage />
              </>
            } />
            <Route path="/success" element={
              <>
                <Header />
                <ProtectedRoute>
                  <SuccessPage />
                </ProtectedRoute>
              </>
            } />
            <Route path="/dashboard" element={
              <>
                <Header />
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </>
            } />
            <Route path="/" element={
              <>
                <Header />
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
                        className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 mr-4"
                      >
                        View Landing Page
                      </a>
                    </div>
                  </div>
                </div>
              </>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;