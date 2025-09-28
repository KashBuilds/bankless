import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleTwitterClick = () => {
    window.open('https://x.com/i/communities/1972012632203731133', '_blank');
  };

  const handleDexScreenerClick = () => {
    window.open('https://dexscreener.com/plasma/0x4d15ae4616a5080683d1f87433bdb544a1b8d2b9', '_blank');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/Photopea Logo.png" alt="BANKLESS Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-gray-900">BANKLESS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onPageChange('home')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'home' 
                  ? 'bg-[#0b2824]/10 text-[#0b2824]' 
                  : 'text-gray-700 hover:text-[#0b2824] hover:bg-gray-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onPageChange('how-to-buy')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'how-to-buy' 
                  ? 'bg-[#0b2824]/10 text-[#0b2824]' 
                  : 'text-gray-700 hover:text-[#0b2824] hover:bg-gray-100'
              }`}
            >
              How to Buy
            </button>
            
            {/* Social and External Links */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleTwitterClick}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="X (Twitter)"
              >
                <img src="/X Logo Round Color.png" alt="X" className="w-6 h-6" />
              </button>
              <button
                onClick={handleDexScreenerClick}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="DexScreener"
              >
                <img src="/Dexscreener Logo Transparent.webp" alt="DexScreener" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  onPageChange('home');
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-left transition-colors ${
                  currentPage === 'home' 
                    ? 'bg-[#0b2824]/10 text-[#0b2824]' 
                    : 'text-gray-700 hover:text-[#0b2824] hover:bg-gray-100'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onPageChange('how-to-buy');
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-left transition-colors ${
                  currentPage === 'how-to-buy' 
                    ? 'bg-[#0b2824]/10 text-[#0b2824]' 
                    : 'text-gray-700 hover:text-[#0b2824] hover:bg-gray-100'
                }`}
              >
                How to Buy
              </button>
              
              <div className="flex items-center space-x-3 px-3 pt-4">
                <button
                  onClick={handleTwitterClick}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="X (Twitter)"
                >
                  <img src="/X Logo Round Color.png" alt="X" className="w-6 h-6" />
                </button>
                <button
                  onClick={handleDexScreenerClick}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="DexScreener"
                >
                  <img src="/Dexscreener Logo Transparent.webp" alt="DexScreener" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};