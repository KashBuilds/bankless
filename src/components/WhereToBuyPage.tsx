import React from 'react';
import { ExternalLink, TrendingUp, Shield } from 'lucide-react';

export const WhereToBuyPage: React.FC = () => {
  const exchanges = [
    {
      name: 'Oku Trade',
      description: 'Direct trading on Plasma network with competitive rates and instant swaps.',
      features: ['Instant Swaps', 'Low Fees', 'Plasma Native'],
      link: 'https://oku.trade/?inputChain=plasma&inToken=0x0000000000000000000000000000000000000000&outToken=0xfc8a5aeefad8cc23f629489cdc6b0ec883d04702&isExactOut=false&inAmount=%2215%22&outAmount=%224423.091242806340783413%22',
      primary: false,
      logo: '🔄'
    },
    {
      name: 'DyorSwap',
      description: 'Decentralized exchange specifically designed for Plasma network tokens.',
      features: ['DEX Trading', 'Full Control', 'No KYC'],
      link: 'https://dyorswap.org/launchInfo/?id=0xfC8A5aeEfAd8cC23f629489Cdc6b0Ec883D04702&chainId=9745',
      primary: false,
      logo: '⚡'
    },
    {
      name: 'BasedBot Telegram',
      description: 'Telegram-based trading bot for easy $BANKLESS purchases. Simple setup with MetaMask integration.',
      features: ['Telegram Bot', 'MetaMask Integration', 'Easy Setup'],
      link: 'https://t.me/based_eth_bot?start=r_BeezyScores',
      primary: true,
      logo: '🤖'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Where to Buy $BANKLESS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trade $BANKLESS on these trusted platforms. All exchanges support the Plasma network for seamless transactions.
          </p>
        </div>

        {/* Exchanges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {exchanges.map((exchange, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${
                exchange.primary ? 'ring-2 ring-[#0b2824] border-[#0b2824]/30' : 'border-gray-200'
              }`}
            >
              {exchange.primary && (
                <div className="bg-[#0b2824] text-white text-center py-2 px-4">
                  <span className="text-sm font-semibold">⭐ RECOMMENDED</span>
                </div>
              )}
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{exchange.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exchange.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {exchange.description}
                </p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {exchange.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => window.open(exchange.link, '_blank')}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 ${
                    exchange.primary
                      ? 'bg-[#0b2824] text-white hover:bg-[#0b2824]/90'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <span>{exchange.name === 'BasedBot Telegram' ? 'Start BasedBot' : `Trade on ${exchange.name}`}</span>
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Contract Information */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Contract Information
          </h4>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Contract Address:</span>
              <button
                onClick={() => navigator.clipboard.writeText('0xfC8A5aeEfAd8cC23f629489Cdc6b0Ec883D04702')}
                className="font-mono text-sm bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 transition-colors"
              >
                0xfC8A5aeEfAd8cC23f629489Cdc6b0Ec883D04702
              </button>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-gray-600 font-medium">Network:</span>
              <span className="font-semibold">Plasma (Chain ID: 9745)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};