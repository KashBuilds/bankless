import React from 'react';
import { Wallet, ArrowRight, Link, ShoppingCart, CheckCircle } from 'lucide-react';

export const HowToBuyPage: React.FC = () => {
  const steps = [
    {
      icon: <Wallet size={32} />,
      title: 'Setup a MetaMask wallet',
      description: 'Download and install MetaMask browser extension or mobile app to manage your crypto safely.',
      action: 'Download MetaMask',
      link: 'https://metamask.io'
    },
    {
      icon: <ArrowRight size={32} />,
      title: 'Bridge funds to XPL',
      description: 'Use DeBridge to move your funds to the Plasma (XPL) network in your MetaMask wallet.',
      action: 'Visit DeBridge',
      link: 'http://debridge.finance'
    },
    {
      icon: <Link size={32} />,
      title: 'Setup BasedBot on Telegram',
      description: 'Join the BasedBot Telegram bot for easy trading. Use the provided link to get started.',
      action: 'Start BasedBot',
      link: 'https://t.me/based_eth_bot?start=r_BeezyScores'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Import your MetaMask wallet into BasedBot',
      description: 'Connect your MetaMask wallet to BasedBot for seamless trading.',
      action: 'Connect Wallet',
      link: null
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'Paste the CA of $BANKLESS into BasedBot',
      description: 'Paste the $BANKLESS contract address (0x9840BceE47E9C56696301CE46f340Cbd013652aa) into the chat with BasedBot.',
      action: 'Paste Contract Address',
      link: null
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Select how much you want to buy and buy it',
      description: 'Choose your purchase amount and complete your $BANKLESS transaction through BasedBot.',
      action: 'Buy $BANKLESS',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How to Buy $BANKLESS
          </h1>
          <p className="text-xl text-gray-600">
            Getting so many questions on how to buy $BANKLESS so I'm making a guide.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#0b2824] rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  {step.link && (
                    <button
                      onClick={() => window.open(step.link, '_blank')}
                      className="bg-[#0b2824] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0b2824]/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      {step.action}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Congratulations Message */}
        <div className="mt-16 bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Congratulations!
          </h3>
          <p className="text-green-700 text-lg">
            Now you're in the coin and can enjoy the ride!
          </p>
        </div>

        {/* Quick Buy CTA */}
        <div className="mt-16 bg-[#0b2824] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Or Buy Directly
          </h3>
          <p className="text-white/80 mb-6">
            Already have everything set up? Skip the steps and buy directly via BasedBot.
          </p>
          <button
            onClick={() => window.open('https://t.me/based_eth_bot?start=r_BeezyScores', '_blank')}
            className="bg-white text-[#0b2824] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-xl"
          >
            Start BasedBot Now
          </button>
        </div>

        {/* Important Notes */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-yellow-800 mb-3">
            Important Notes:
          </h4>
          <ul className="text-yellow-700 space-y-2">
            <li>• Always verify the correct contract address before trading</li>
            <li>• Make sure you're on the Plasma network (Chain ID: 9745)</li>
            <li>• Start with a small amount first to test the process</li>
            <li>• Never share your private keys or seed phrase with anyone</li>
          </ul>
        </div>
      </div>
    </div>
  );
};