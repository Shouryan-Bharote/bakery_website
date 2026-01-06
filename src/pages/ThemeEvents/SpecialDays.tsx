// src/pages/ThemeEvents/SpecialDays.tsx
import WaveBackground from '../../components/WaveBackground';

const SpecialDays = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFF5DC]">
      
      {/* Brown Wave Background - No restrictions */}
      <WaveBackground
        color="#41291F"
        className="absolute inset-0 scale-150 -translate-x-40 translate-y-50"
      />

      {/* Page Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Top Section - Title */}
        <div className="pt-16 pb-8 text-center">
          <h1 className="text-5xl font-bold text-[#41291F]" style={{ fontFamily: 'Heyam, sans-serif' }}>
            Special Guest <span className="italic">Specials</span>
          </h1>
          <div className="flex justify-center gap-4 text-2xl mt-4">
            <span>🎂</span>
            <span>❤️</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16">
          
          {/* Left Section - Most Loved (Brown background) */}
          <div className="text-white flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <h2 className="text-3xl font-bold">Most Loved</h2>
            </div>
            
            {/* Product Cards */}
            <div className="space-y-4 max-w-sm">
              <div className="flex items-center gap-4 bg-[#5C3D2E]/50 backdrop-blur-sm rounded-2xl p-4">
                <div className="w-20 h-20 bg-white rounded-xl flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold">Peanut Brownie</p>
                  <p className="text-white/90">$6.80</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#5C3D2E]/50 backdrop-blur-sm rounded-2xl p-4">
                <div className="w-20 h-20 bg-white rounded-xl flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold">Brownie With Ice-Cream</p>
                  <p className="text-white/90">$7.80</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#5C3D2E]/50 backdrop-blur-sm rounded-2xl p-4">
                <div className="w-20 h-20 bg-white rounded-xl flex-shrink-0"></div>
                <div>
                  <p className="text-white font-semibold">ChocoChip Brownie</p>
                  <p className="text-white/90">$8 - 3 Pieces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Available Flavors (Cream background) */}
          <div className="text-[#41291F] flex flex-col justify-center items-center">
            
            {/* Large product image circle */}
            <div className="w-72 h-72 lg:w-96 lg:h-96 bg-white rounded-full shadow-2xl mb-12 flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/brownies/brownie-plate.jpg" 
                alt="Brownies"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Available Flavors Section */}
            <div className="text-center w-full">
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">Available Flavors</h3>
              <div className="flex justify-center gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-xl mb-3 mx-auto"></div>
                  <p className="text-sm font-medium">Caramel</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-xl mb-3 mx-auto"></div>
                  <p className="text-sm font-medium">White<br/>Chocolate</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-xl mb-3 mx-auto"></div>
                  <p className="text-sm font-medium">Original<br/>Fudge</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full shadow-xl mb-3 mx-auto"></div>
                  <p className="text-sm font-medium">Fruity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDays;
