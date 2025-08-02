import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, Zap } from 'lucide-react';

export function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const veo3Product = {
    id: 'prod_SleJcMKxzR2Ofo',
    priceId: 'price_1Rq70a1fqfaGAxK3iuKHpUZ7',
    name: 'Veo3Factory',
    description: 'An automated system that creates, posts, and grows your social media.',
    price: 97.00
  };

  const handleCheckout = async () => {
    setLoading(true);
    setError('');

    try {
      // For now, simulate the checkout process
      // In production, you would integrate with your payment processor here
      
      // Show loading for 2 seconds to simulate processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to success page
      window.location.href = '/success';
      
    } catch (err: any) {
      console.error('Checkout error:', err);
      setError('Failed to process checkout. Please try again.');
      setLoading(false);
    }
  };

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

            <div className="bg-yellow-900 border border-yellow-500 rounded-lg p-4 mb-8">
              <h3 className="text-yellow-200 font-bold mb-2">⚠️ Demo Mode</h3>
              <p className="text-yellow-300 text-sm">
                This is currently in demo mode. To enable real Stripe payments, you'll need to:
              </p>
              <ul className="text-yellow-300 text-sm mt-2 space-y-1">
                <li>• Set up your Stripe account and get API keys</li>
                <li>• Configure Supabase with your project URL and keys</li>
                <li>• Deploy the edge functions to handle payments</li>
              </ul>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                  Processing...
                </div>
              ) : (
                `Complete Purchase - $${veo3Product.price.toFixed(2)} (Demo)`
              )}
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Demo mode - No actual payment will be processed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}