// src/pages/Home/Sections/ThemeEvents.tsx
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ThemeCard from '../../../components/ThemeCard/ThemeCard';

const ThemeEvents = () => {
  return (
    <section className="w-full bg-[#FFF5DC] py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle>
            Cakes for <span className="text-[#FFB800]">Theme</span> and <span className="text-[#FFB800]">Events</span>
          </SectionTitle>
        </div>


        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="animate-fadeInUp" style={{ animationDelay: '0ms' }}>
            <ThemeCard
              imageSrc="/assets/Events/Birthday theme cake.jpg"
              title="Cakes for Birthdays"
              bgColor="bg-pink-200"
              link="/cakes/birthdays"
            />
          </div>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '80ms' }}>
            <ThemeCard
              imageSrc="/assets/Events/Aniversary cake.jpg"
              title="Cakes for Aniversaries"
              bgColor="bg-gray-100"
              link="/cakes/anniversaries"
            />
          </div>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '160ms' }}>
            <ThemeCard
              imageSrc="/assets/Events/Special days.jpg"
              title="Cakes for Special Days"
              bgColor="bg-gray-800"
              link="/cakes/special-days"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeEvents;
