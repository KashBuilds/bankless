import React from 'react';
import { TrendingUp, Shield, Zap } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                    $BANKLESS
                  </h1>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-mono break-all">
                    CA: 0xfC8A5aeEfAd8cC23f629489Cdc6b0Ec883D04702
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.open('https://t.me/based_eth_bot?start=r_BeezyScores', '_blank')}
                  className="bg-[#0b2824] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0b2824]/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Buy $BANKLESS
                </button>
              </div>
            </div>

            {/* Right Content - Animated Coin */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-[#0b2824] rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                    <img src="/Photopea Logo.png" alt="BANKLESS Logo" className="w-48 h-48 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BANKLESS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why $BANKLESS?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                Banks are relics of the past - slow, expensive, and unreliable - while stablecoins are already giving the world freedom, speed, and stability without middlemen, ushering in the true bankless economy.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};