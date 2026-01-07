// src/pages/Categories/Categories.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-3xl cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
      
      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: 'Cakes',
      imageSrc: '/assets/categories/cakes.jpg',
      route: '/categories/cakes',
    },
    {
      id: 2,
      title: 'Pastries',
      imageSrc: '/assets/categories/pastries.jpg',
      route: '/categories/pastries',
    },
    {
      id: 3,
      title: 'Brownies',
      imageSrc: '/assets/categories/brownies.jpg',
      route: '/categories/brownies',
    },
    {
      id: 4,
      title: 'Cookies',
      imageSrc: '/assets/categories/cookies.jpg',
      route: '/categories/cookies',
    },
  ];

  const handleCategoryClick = (route: string, categoryName: string) => {
    console.log(`Navigating to ${categoryName}`);
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-[#FFF5DC] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="mb-10 lg:mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A1D1F] text-center mb-6">
            Our Categories
          </h1>
          
          {/* Decorative line */}
          <div className="w-full mx-auto border-t-2 border-[#2B1B12]/20"></div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'backwards',
              }}
            >
              <CategoryCard
                imageSrc={category.imageSrc}
                title={category.title}
                onClick={() => handleCategoryClick(category.route, category.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
