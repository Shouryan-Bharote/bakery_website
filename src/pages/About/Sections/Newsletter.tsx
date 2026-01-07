// src/pages/About/Sections/Newsletter.tsx
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="w-full bg-[#755338] py-12 lg:py-16">
      <div className="mx-auto px-6 sm:px-8 lg:px-16 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-white py-6 lg:py-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 lg:mb-6">
              Subscribe to Our Newsletter
            </h2>
            
            <p className="text-base sm:text-lg text-white/80 mb-8 lg:mb-10 max-w-md">
              Stay updated with our latest offers, recipes, and freshly baked delights.
            </p>

            {/* Email Input Form */}
            <form onSubmit={handleSubmit} className="relative max-w-lg">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  required
                  className="w-full px-6 py-4 pr-16 text-base rounded-2xl bg-transparent border-2 border-white text-white placeholder:text-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Image (Hidden on mobile) */}
          <div className="hidden lg:flex justify-end">
            <div className="w-full max-w-md h-64 lg:h-100 overflow-hidden">
              <img
                src="/assets/about us/NewsLetter.jpg"
                alt="Delicious cookies"
                className="w-full h-full rounded-3xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
