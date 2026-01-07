// src/pages/Categories/ProductCategories/Cookies/Cookies.tsx
import ProductCard from '../../../../components/ProductCard/ProductCard';
import CardGrid from '../../../../components/ProductCard/CardGrid';
import BackButton from '../../../../components/BackButton';

const Cookies = () => {
  // Cookies 1kg products
  const cookies1kg = [
    { id: 1, imageSrc: '/assets/Cookies/Double Chocolate Chunk.png', name: 'Double Chocolate Chunk', price: 449, rating: 4.7 },
    { id: 2, imageSrc: '/assets/Cookies/Oatmeal Raisin Cookies.png', name: 'Oatmeal Raisin', price: 399, rating: 4.5 },
    { id: 3, imageSrc: '/assets/Cookies/Almond Butter Cookies.png', name: 'Almond Butter', price: 499, rating: 4.8 },
    { id: 4, imageSrc: '/assets/Cookies/Dark Cocoa Fudge Cookies.jpeg', name: 'Dark Cocoa Fudge', price: 429, rating: 4.6 },
    { id: 5, imageSrc: '/assets/Cookies/Honey Oat Cookies.png', name: 'Honey Oat', price: 399, rating: 4.4 },
    { id: 6, imageSrc: '/assets/Cookies/Peanut Butter Cookies.png', name: 'Peanut Butter', price: 449, rating: 4.7 },
    { id: 7, imageSrc: '/assets/Cookies/Pistachio Cranberry.png', name: 'Pistachio Cranberry', price: 499, rating: 4.8 },
    { id: 8, imageSrc: '/assets/Cookies/Cashew Delight Cookies.png', name: 'Cashew Delight', price: 549, rating: 4.9 },
    { id: 9, imageSrc: '/assets/Cookies/Vanilla Shortbread Cookies.png', name: 'Vanilla Shortbread', price: 399, rating: 4.5 },
    { id: 10, imageSrc: '/assets/Cookies/Cinnamon Brown Sugar Cookies.jfif', name: 'Cinnamon Brown Sugar', price: 549, rating: 4.8 },
    { id: 11, imageSrc: '/assets/Cookies/Espresso Coffee Cookies.jfif', name: 'Espresso Coffee', price: 479, rating: 4.6 },
    { id: 12, imageSrc: '/assets/Cookies/Orange Zest Butter Cookies.jfif', name: 'Orange Zest Butter', price: 429, rating: 4.5 },
  ];

  // Cookies 500g products
  const cookies500g = [
    { id: 13, imageSrc: '/assets/Cookies/Double Chocolate Chunk.png', name: 'Double Chocolate Chunk', price: 249, rating: 4.7 },
    { id: 14, imageSrc: '/assets/Cookies/Oatmeal Raisin Cookies.png', name: 'Oatmeal Raisin', price: 219, rating: 4.5 },
    { id: 15, imageSrc: '/assets/Cookies/Almond Butter Cookies.png', name: 'Almond Butter', price: 279, rating: 4.8 },
    { id: 16, imageSrc: '/assets/Cookies/Dark Cocoa Fudge Cookies.jpeg', name: 'Dark Cocoa Fudge', price: 239, rating: 4.6 },
    { id: 17, imageSrc: '/assets/Cookies/Honey Oat Cookies.png', name: 'Honey Oat', price: 219, rating: 4.4 },
    { id: 18, imageSrc: '/assets/Cookies/Peanut Butter Cookies.png', name: 'Peanut Butter', price: 249, rating: 4.7 },
    { id: 19, imageSrc: '/assets/Cookies/Pistachio Cranberry.png', name: 'Pistachio Cranberry', price: 279, rating: 4.8 },
    { id: 20, imageSrc: '/assets/Cookies/Cashew Delight Cookies.png', name: 'Cashew Delight', price: 299, rating: 4.9 },
    { id: 21, imageSrc: '/assets/Cookies/Vanilla Shortbread Cookies.png', name: 'Vanilla Shortbread', price: 219, rating: 4.5 },
    { id: 22, imageSrc: '/assets/Cookies/Cinnamon Brown Sugar Cookies.jfif', name: 'Cinnamon Brown Sugar', price: 299, rating: 4.8 },
    { id: 23, imageSrc: '/assets/Cookies/Espresso Coffee Cookies.jfif', name: 'Espresso Coffee', price: 259, rating: 4.6 },
    { id: 24, imageSrc: '/assets/Cookies/Orange Zest Butter Cookies.jfif', name: 'Orange Zest Butter', price: 239, rating: 4.5 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5DC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Back Button */}
        <div className="mb-8 animate-fadeInUp">
          <BackButton />
        </div>
        
        {/* Cookies 1kg Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#4A1D1F] mb-10 animate-fadeInUp">
            Cookies 1kg
          </h1>
          
          <CardGrid
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            gap="md"
          >
            {cookies1kg.map((cookie, index) => (
              <div
                key={cookie.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <ProductCard
                  imageSrc={cookie.imageSrc}
                  name={cookie.name}
                  price={cookie.price}
                  rating={cookie.rating}
                />
              </div>
            ))}
          </CardGrid>
        </section>

        {/* Cookies 500g Section */}
        <section>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#4A1D1F] mb-10 animate-fadeInUp">
            Cookies 500g
          </h2>
          
          <CardGrid
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            gap="md"
          >
            {cookies500g.map((cookie, index) => (
              <div
                key={cookie.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <ProductCard
                  imageSrc={cookie.imageSrc}
                  name={cookie.name}
                  price={cookie.price}
                  rating={cookie.rating}
                />
              </div>
            ))}
          </CardGrid>
        </section>
      </div>
    </div>
  );
};

export default Cookies;
