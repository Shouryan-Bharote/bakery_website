// src/pages/ThemeEvents/SpecialDays.tsx
import WaveBackground from '../../components/WaveBackground';

const SpecialDays = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFF5DC]">
      
      {/* Brown Wave Background */}
      <WaveBackground
        color="#41291F"
        className="absolute inset-0 translate-y-0"
      />

      {/* Page Content */}
      <div className="relative z-10 container mx-auto px-4 py-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
          
          {/* Left Section (on brown wave) */}
          <div className="text-white flex flex-col justify-center px-8">
            <h2 className="text-4xl font-bold mb-6">
              Special Days
            </h2>
            <p className="text-lg">
              Celebrate your special moments with our delicious cakes!
            </p>
          </div>

          {/* Right Section (cream background) */}
          <div className="text-[#41291F] flex flex-col justify-center px-8">
            <h2 className="text-4xl font-bold mb-6">
              Available Flavors
            </h2>
            <p className="text-lg">
              Choose from our wide selection of flavors.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialDays;
