import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Viral Reels Factory
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Static website - No authentication required
        </p>
        <a 
          href="/index.html" 
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all"
        >
          View Landing Page
        </a>
      </div>
    </div>
  );
}

export default App;