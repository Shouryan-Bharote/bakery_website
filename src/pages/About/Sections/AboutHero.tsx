// src/pages/About/Sections/AboutHero.tsx
const AboutHero = () => {
  return (
    <section className="relative w-full">
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh] min-h-100 lg:h-[65vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/AboutUsHero.jpg"
            alt="Our Bakery"
            className="w-full h-full object-cover"
            style={{ 
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 animate-fadeInUp">
              About Us
            </h1>

            {/* Description */}
            <p 
              className="text-base sm:text-lg lg:text-xl text-white leading-relaxed max-w-3xl mx-auto animate-fadeInUp" 
              style={{ animationDelay: '200ms' }}
            >
              From sunrise bakes to late-night cravings, our guests enjoy warm, freshly crafted treats made with real ingredients and heart, savoring moments that linger long after the last crumb.
            </p>
          </div>
        </div>
      </div>

      {/* Cream Bottom Strip */}
      <div className="w-full h-2 bg-[#FFF5DC]"></div>
    </section>
  );
};

export default AboutHero;
