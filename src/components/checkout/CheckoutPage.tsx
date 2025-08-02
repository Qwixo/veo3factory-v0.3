import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, Zap } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { createCheckoutSession } from '../../lib/stripe';
import { STRIPE_PRODUCTS } from '../../stripe-config';

export function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const veo3Product = STRIPE_PRODUCTS.find(p => p.name === 'Veo3Factory');

  const handleCheckout = async () => {
    if (!user) {
      // Redirect to signup if not authenticated
      window.location.href = '/signup';
      return;
    }

    if (!veo3Product) {
      setError('Product not found');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { url } = await createCheckoutSession({
        priceId: veo3Product.priceId,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/checkout`,
        mode: veo3Product.mode,
      });

      // Redirect to Stripe checkout
      window.location.href = url;
    } catch (err: any) {
      setError(err.message || 'Failed to create checkout session');
      setLoading(false);
    }
  };

  if (!veo3Product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Product Not Found</h2>
          <Link to="/" className="text-yellow-400 hover:text-yellow-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Complete Your Purchase</h1>
          <p className="text-xl text-gray-300">
            Get instant access to the Viral Reels Factory automation system
          </p>
        </div>

        {error && (
          <div className="bg-red-900 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-8 max-w-2xl mx-auto">
            {error}
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 border-2 border-yellow-400 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">{veo3Product.name}</h2>
              <p className="text-gray-400 mb-6">{veo3Product.description}</p>
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                ${veo3Product.price.toFixed(2)}
              </div>
              <p className="text-gray-400">One-time payment</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <Shield className="w-5 h-5 text-green-400 mr-3" />
                <span>256-bit SSL encryption</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                <span>Instant digital delivery</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CreditCard className="w-5 h-5 text-blue-400 mr-3" />
                <span>All major cards accepted</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">What You Get:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Complete n8n Automation Workflow</li>
                <li>✅ VEO 3 AI Video Generation Setup</li>
                <li>✅ GROK & GPT Integration</li>
                <li>✅ Auto-posting to 3 Platforms</li>
                <li>✅ ASMR Video Templates</li>
                <li>✅ Postiz Social Media Scheduler</li>
                <li>✅ Complete Setup Guide</li>
                <li>✅ 24/7 Automation (Posts Every 8 Hours)</li>
                <li>✅ Access to Expert Automators & Support</li>
              </ul>
            </div>

            {!user && (
              <div className="bg-blue-900 border border-blue-500 text-blue-200 px-4 py-3 rounded-lg mb-6">
                <p className="font-medium">Account Required</p>
                <p className="text-sm">You'll be redirected to create an account before checkout.</p>
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                  Redirecting to Stripe...
                </div>
              ) : (
                `Complete Purchase - $${veo3Product.price.toFixed(2)}`
              )}
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Secure payment powered by Stripe • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}