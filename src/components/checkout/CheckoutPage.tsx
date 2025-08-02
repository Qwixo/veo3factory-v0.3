import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, Zap } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { createCheckoutSession } from '../../lib/stripe';
import { STRIPE_PRODUCTS } from '../../stripe-config';

export function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = async (priceId: string, mode: 'payment' | 'subscription') => {
    if (!user) {
      navigate('/login');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { url } = await createCheckoutSession({
        priceId,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/checkout`,
        mode,
      });

      window.location.href = url;
    } catch (err: any) {
      setError(err.message || 'Failed to create checkout session');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-300">
            Get started with our viral automation system
          </p>
        </div>

        {error && (
          <div className="bg-red-900 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-8 max-w-2xl mx-auto">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {STRIPE_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-yellow-400 transition-all transform hover:scale-105"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="text-4xl font-bold text-yellow-400">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Shield className="w-5 h-5 text-green-400 mr-3" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>Instant access after payment</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CreditCard className="w-5 h-5 text-blue-400 mr-3" />
                  <span>All major cards accepted</span>
                </div>
              </div>

              <button
                onClick={() => handleCheckout(product.priceId, product.mode)}
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  `Get ${product.name}`
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need help choosing? Contact us at{' '}
            <a href="mailto:support@viralreelsfactory.com" className="text-yellow-400 hover:text-yellow-300">
              support@viralreelsfactory.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}