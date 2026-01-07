// src/pages/Categories/ProductCategories/Brownies/Brownies.tsx
import ProductCard from '../../../../components/ProductCard/ProductCard';
import CardGrid from '../../../../components/ProductCard/CardGrid';
import BackButton from '../../../../components/BackButton';

const Brownies = () => {
  // Brownies 1 piece products
  const brownies1Pic = [
    { id: 1, imageSrc: '/assets/Brownies/Classic Fudge.jpg', name: 'Classic Fudge', price: 79, rating: 4.7 },
    { id: 2, imageSrc: '/assets/Brownies/Walnut Crunch.jpg', name: 'Walnut Crunch', price: 89, rating: 4.8 },
    { id: 3, imageSrc: '/assets/Brownies/Dark Cocoa.jpg', name: 'Dark Cocoa', price: 75, rating: 4.6 },
    { id: 4, imageSrc: '/assets/Brownies/Almond Butter.jpg', name: 'Almond Butter', price: 85, rating: 4.5 },
    { id: 5, imageSrc: '/assets/Brownies/Nutella Swirl.jpg', name: 'Nutella Swirl', price: 99, rating: 4.9 },
    { id: 6, imageSrc: '/assets/Brownies/Hazelnut Choco.jpg', name: 'Hazelnut Choco', price: 95, rating: 4.8 },
    { id: 7, imageSrc: '/assets/Brownies/Caramel Drizzle.jpg', name: 'Caramel Drizzle', price: 99, rating: 4.7 },
    { id: 8, imageSrc: '/assets/Brownies/Oreo  Chunk.jpg', name: 'Oreo Chunk', price: 89, rating: 4.6 },
    { id: 9, imageSrc: '/assets/Brownies/Red Velvet.jpg', name: 'Red Velvet', price: 109, rating: 4.8 },
    { id: 10, imageSrc: '/assets/Brownies/Peanut Butter.jpg', name: 'Peanut Butter', price: 95, rating: 4.7 },
    { id: 11, imageSrc: '/assets/Brownies/Coconut Chocolate.jpg', name: 'Coconut Chocolate', price: 99, rating: 4.9 },
    { id: 12, imageSrc: '/assets/Brownies/Biscoff Lotus.jpg', name: 'Biscoff Lotus', price: 105, rating: 4.8 },
  ];

  // Brownies 10 pieces products
  const brownies10Pic = [
    { id: 13, imageSrc: '/assets/Brownies/Classic Fudge.jpg', name: 'Classic Fudge', price: 699, rating: 4.7 },
    { id: 14, imageSrc: '/assets/Brownies/Walnut Crunch.jpg', name: 'Walnut Crunch', price: 799, rating: 4.8 },
    { id: 15, imageSrc: '/assets/Brownies/Dark Cocoa.jpg', name: 'Dark Cocoa', price: 649, rating: 4.6 },
    { id: 16, imageSrc: '/assets/Brownies/Almond Butter.jpg', name: 'Almond Butter', price: 749, rating: 4.5 },
    { id: 17, imageSrc: '/assets/Brownies/Nutella Swirl.jpg', name: 'Nutella Swirl', price: 899, rating: 4.9 },
    { id: 18, imageSrc: '/assets/Brownies/Hazelnut Choco.jpg', name: 'Hazelnut Choco', price: 849, rating: 4.8 },
    { id: 19, imageSrc: '/assets/Brownies/Caramel Drizzle.jpg', name: 'Caramel Drizzle', price: 899, rating: 4.7 },
    { id: 20, imageSrc: '/assets/Brownies/Oreo  Chunk.jpg', name: 'Oreo Chunk', price: 799, rating: 4.6 },
    { id: 21, imageSrc: '/assets/Brownies/Red Velvet.jpg', name: 'Red Velvet', price: 999, rating: 4.8 },
    { id: 22, imageSrc: '/assets/Brownies/Peanut Butter.jpg', name: 'Peanut Butter', price: 849, rating: 4.7 },
    { id: 23, imageSrc: '/assets/Brownies/Coconut Chocolate.jpg', name: 'Coconut Chocolate', price: 899, rating: 4.9 },
    { id: 24, imageSrc: '/assets/Brownies/Biscoff Lotus.jpg', name: 'Biscoff Lotus', price: 949, rating: 4.8 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5DC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Back Button */}
        <div className="mb-8 animate-fadeInUp">
          <BackButton />
        </div>

        
        {/* Brownies 1 pic Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#4A1D1F] mb-10 animate-fadeInUp">
            Brownies (1 pic)
          </h1>
          
          <CardGrid
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            gap="md"
          >
            {brownies1Pic.map((brownie, index) => (
              <div
                key={brownie.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <ProductCard
                  imageSrc={brownie.imageSrc}
                  name={brownie.name}
                  price={brownie.price}
                  rating={brownie.rating}
                />
              </div>
            ))}
          </CardGrid>
        </section>

        {/* Brownies 10 pic Section */}
        <section>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#4A1D1F] mb-10 animate-fadeInUp">
            Brownies (10 pic)
          </h2>
          
          <CardGrid
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            gap="md"
          >
            {brownies10Pic.map((brownie, index) => (
              <div
                key={brownie.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <ProductCard
                  imageSrc={brownie.imageSrc}
                  name={brownie.name}
                  price={brownie.price}
                  rating={brownie.rating}
                />
              </div>
            ))}
          </CardGrid>
        </section>
      </div>
    </div>
  );
};

export default Brownies;
