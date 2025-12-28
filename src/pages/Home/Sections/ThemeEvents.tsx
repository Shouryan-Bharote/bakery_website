// src/pages/Home/Sections/ThemeEvents.tsx
import ThemeCard from '../../../components/ThemeCard/ThemeCard';

const ThemeEvents = () => {
  return (
    <section className="w-full bg-[#FFF5DC] py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1B12]">
            Cakes for <span className="text-[#FFB800]">Theme</span> and <span className="text-[#FFB800]">Events</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ThemeCard
            imageSrc="/assets/cakes/birthday-cake.jpg"
            title="Cakes for Birthdays"
            bgColor="bg-pink-200"
            link="/cakes/birthdays"
          />
          
          <ThemeCard
            imageSrc="/assets/cakes/anniversary-cake.jpg"
            title="Cakes for Aniversaries"
            bgColor="bg-gray-100"
            link="/cakes/anniversaries"
          />
          
          <ThemeCard
            imageSrc="/assets/cakes/special-cake.jpg"
            title="Cakes for Special Days"
            bgColor="bg-gray-800"
            link="/cakes/special-days"
          />
        </div>
      </div>
    </section>
  );
};

export default ThemeEvents;
