// src/pages/About/Sections/OurChefs.tsx
import { useState, useRef } from 'react';
import ChefCard from '../../../components/ChefCard/ChefCard';
import Button from '../../../components/Button';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const allChefs = [
  {
    id: 1,
    imageSrc: '/assets/Chef1.png',
    name: 'JOHN WICK',
    experience: '- 8 YEARS',
  },
  {
    id: 2,
    imageSrc: '/assets/Chef1.png',
    name: 'MARIA GARCIA',
    experience: '- 12 YEARS',
  },
  {
    id: 3,
    imageSrc: '/assets/Chef1.png',
    name: 'DAVID CHEN',
    experience: '- 6 YEARS',
  },
  {
    id: 4,
    imageSrc: '/assets/Chef1.png',
    name: 'SOPHIE MARTIN',
    experience: '- 10 YEARS',
  },
  {
    id: 5,
    imageSrc: '/assets/Chef1.png',
    name: 'ALEX BROWN',
    experience: '- 15 YEARS',
  },
  {
    id: 6,
    imageSrc: '/assets/Chef1.png',
    name: 'EMMA WILSON',
    experience: '- 9 YEARS',
  },
];

const INITIAL_ITEMS = 2;

const OurChefs = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggleView = () => {
    if (visibleCount === INITIAL_ITEMS) {
      // Expand - show all chefs
      setVisibleCount(allChefs.length);
    } else {
      // Collapse - show initial chefs and scroll to top of section
      setVisibleCount(INITIAL_ITEMS);
      
      // Scroll to the section smoothly
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  };

  const visibleChefs = allChefs.slice(0, visibleCount);
  const isExpanded = visibleCount > INITIAL_ITEMS;

  return (
    <section ref={sectionRef} className="w-full bg-[#FFF5DC] py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        
        {/* Section Title */}
       <div className="mb-12">
          <SectionTitle>OUR CHEF</SectionTitle>
        </div>


        {/* Chef Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-12 mb-12">
          {visibleChefs.map((chef, index) => (
            <div
              key={chef.id}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${(index % 2) * 80}ms`,
              }}
            >
              <ChefCard
                imageSrc={chef.imageSrc}
                name={chef.name}
                experience={chef.experience}
              />
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            size="md"
            onClick={handleToggleView}
            className="px-8"
          >
            {isExpanded ? 'View Less ↑' : 'View More →'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurChefs;
