// src/pages/Home/Sections/ThemeEvents.tsx
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ThemeCard from '../../../components/ThemeCard/ThemeCard';

const ThemeEvents = () => {
  const themeCards = [
    {
      id: 1,
      imageSrc: '/assets/Events/Birthday theme cake.jpg',
      title: 'Cakes for Birthdays',
      bgColor: 'bg-pink-200',
      link: '/',
      delay: '0ms',
    },
    {
      id: 2,
      imageSrc: '/assets/Events/Aniversary cake.jpg',
      title: 'Cakes for Aniversaries',
      bgColor: 'bg-gray-100',
      link: '/',
      delay: '80ms',
    },
    {
      id: 3,
      imageSrc: '/assets/Events/Special days.jpg',
      title: 'Cakes for Special Days',
      bgColor: 'bg-gray-800',
      link: '/theme-events/special-days',
      delay: '160ms',
    },
  ];

  return (
    <section className="w-full py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="mb-8 lg:mb-12">
          <SectionTitle>
            Cakes for <span className="text-[#FFB800]">Theme</span> and <span className="text-[#FFB800]">Events</span>
          </SectionTitle>
        </div>

        {/* Mobile Carousel / Desktop Grid */}
        <div className="relative">
          {/* Mobile: Horizontal scroll carousel */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            <div className="flex gap-4 px-2">
              {themeCards.map((card) => (
                <div
                  key={card.id}
                  className="shrink-0 w-[85vw] snap-center"
                >
                  <ThemeCard
                    imageSrc={card.imageSrc}
                    title={card.title}
                    bgColor={card.bgColor}
                    link={card.link}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {themeCards.map((card, index) => (
              <div
                key={card.id}
                className="animate-fadeInUp"
                style={{ animationDelay: card.delay }}
              >
                <ThemeCard
                  imageSrc={card.imageSrc}
                  title={card.title}
                  bgColor={card.bgColor}
                  link={card.link}
                />
              </div>
            ))}
          </div>

          {/* Scroll indicators for mobile (optional) */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
            {themeCards.map((card) => (
              <div
                key={`dot-${card.id}`}
                className="w-2 h-2 rounded-full bg-[#2B1B12]/30"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeEvents;
