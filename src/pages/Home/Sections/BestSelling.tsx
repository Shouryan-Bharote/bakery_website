// src/pages/Home/Sections/BestSelling.tsx
import { useState } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import CardGrid from '../../../components/ProductCard/CardGrid';
import Button from '../../../components/Button';

const allProducts = [
  {
    id: 1,
    imageSrc: '/assets/cakes/Classic Chocolate Truffle.jpeg',
    name: 'Tiramisu',
    price: 429,
    rating: 4.0,
  },
  {
    id: 2,
    imageSrc: '/assets/cakes/Black Forest Delight.jpeg',
    name: 'Custard Puffs',
    price: 429,
    rating: 4.0,
  },
  {
    id: 3,
    imageSrc: '/assets/cakes/Pineapple Fresh Cream.jpeg',
    name: 'Pistachio Cream',
    price: 429,
    rating: 4.0,
  },
  {
    id: 4,
    imageSrc: '/assets/cakes/Red Velvet Cream Cheese.jpeg',
    name: 'Mocha Coffee',
    price: 429,
    rating: 4.0,
  },
  // Additional hidden products
  {
    id: 5,
    imageSrc: '/assets/cakes/Butterscotch Caramel Crunch.jpeg',
    name: 'Butterscotch Dream',
    price: 399,
    rating: 4.5,
  },
  {
    id: 6,
    imageSrc: '/assets/cakes/Classic Chocolate Truffle.jpeg',
    name: 'Chocolate Heaven',
    price: 449,
    rating: 4.3,
  },
  {
    id: 7,
    imageSrc: '/assets/cakes/Black Forest Delight.jpeg',
    name: 'Forest Berry',
    price: 479,
    rating: 4.7,
  },
  {
    id: 8,
    imageSrc: '/assets/cakes/Pineapple Fresh Cream.jpeg',
    name: 'Tropical Delight',
    price: 419,
    rating: 4.2,
  },
];

const INITIAL_ITEMS = 4;

const BestSelling = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS);

  const handleToggleView = () => {
    if (visibleCount === INITIAL_ITEMS) {
      // Show all items
      setVisibleCount(allProducts.length);
    } else {
      // Reset to initial items
      setVisibleCount(INITIAL_ITEMS);
    }
  };

  const visibleProducts = allProducts.slice(0, visibleCount);
  const isExpanded = visibleCount > INITIAL_ITEMS;

  return (
    <section className="w-full bg-[#FFF5DC] py-12 lg:py-16">
      {/* Outer margin */}
      <div className="m-3 sm:m-4 lg:m-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Header Section - 40-60 split */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-10 lg:mb-12">
            {/* Left: Heading - 40% */}
            <div className="lg:w-2/5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1B12] leading-tight">
                Try Our Best Selling
              </h2>
            </div>

            {/* Vertical divider (hidden on mobile) */}
            <div className="hidden lg:block w-px bg-[#2B1B12] opacity-20"></div>

            {/* Right: Description - 60% */}
            <div className="lg:w-3/5 flex items-center">
              <p className="text-sm sm:text-base text-[#6B4A38] leading-relaxed">
                Here's our best creations that everyone loves. Lightness and sweetness of the cake make you want more and more. Start from cake, bread and other creations.
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <CardGrid 
            columns={{ mobile: 1, tablet: 2, desktop: 4 }}
            gap="md"
            className="mb-8"
          >
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${(index % 4) * 100}ms`,
                  animationFillMode: 'backwards'
                }}
              >
                <ProductCard
                  imageSrc={product.imageSrc}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                />
              </div>
            ))}
          </CardGrid>

          {/* Toggle Button */}
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              size="md"
              onClick={handleToggleView}
              className="px-8 transition-all duration-300"
            >
              {isExpanded ? 'View Less ↑' : 'View More →'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
