// src/pages/Categories/ProductCategories/Cakes/Cakes.tsx
import ProductCard from '../../../../components/ProductCard/ProductCard';
import CardGrid from '../../../../components/ProductCard/CardGrid';
import BackButton from '../../../../components/BackButton';

const Cakes = () => {
  // Cakes 1kg products
  const cakes1kg = [
    { id: 1, imageSrc: '/assets/cakes/Black Forest Delight.jpeg', name: 'Black Forest', price: 699, rating: 4.5 },
    { id: 2, imageSrc: '/assets/cakes/Red Velvet Cream Cheese.jpeg', name: 'Red Velvet', price: 799, rating: 4.8 },
    { id: 3, imageSrc: '/assets/cakes/Butterscotch Caramel Crunch.jpeg', name: 'Butterscotch', price: 649, rating: 4.6 },
    { id: 4, imageSrc: '/assets/cakes/Pineapple Fresh Cream.jpeg', name: 'Pineapple', price: 599, rating: 4.3 },
    { id: 5, imageSrc: '/assets/cakes/Butterscotch Caramel Crunch.jpeg', name: 'Blueberry', price: 849, rating: 4.7 },
    { id: 6, imageSrc: '/assets/cakes/Classic Chocolate Truffle.jpeg', name: 'Strawberry', price: 749, rating: 4.5 },
    { id: 7, imageSrc: '/assets/cakes/Red Velvet Cream Cheese.jpeg', name: 'Fruit Pulp', price: 699, rating: 4.4 },
    { id: 8, imageSrc: '/assets/cakes/Classic Chocolate Truffle.jpeg', name: 'Belgian Dark', price: 899, rating: 4.9 },
    { id: 9, imageSrc: '/assets/cakes/Red Velvet Cream Cheese.jpeg', name: 'Coffee Mocha', price: 799, rating: 4.6 },
    { id: 10, imageSrc: '/assets/cakes/Classic Chocolate Truffle.jpeg', name: 'Mixed Strawberry', price: 849, rating: 4.7 },
    { id: 11, imageSrc: '/assets/cakes/Black Forest Delight.jpeg', name: 'Oreo Overload', price: 899, rating: 4.8 },
    { id: 12, imageSrc: '/assets/cakes/Pineapple Fresh Cream.jpeg', name: 'Mango Cream', price: 749, rating: 4.5 },
  ];

  // Cakes 500g products
  const cakes500g = [
    { id: 13, imageSrc: '/assets/cakes/Black Forest Delight.jpeg', name: 'Black Forest', price: 399, rating: 4.5 },
    { id: 14, imageSrc: '/assets/cakes/Red Velvet Cream Cheese.jpeg', name: 'Red Velvet', price: 449, rating: 4.8 },
    { id: 15, imageSrc: '/assets/cakes/Butterscotch Caramel Crunch.jpeg', name: 'Butterscotch', price: 349, rating: 4.6 },
    { id: 16, imageSrc: '/assets/cakes/Pineapple Fresh Cream.jpeg', name: 'Pineapple', price: 329, rating: 4.3 },
    { id: 17, imageSrc: '/assets/cakes/Butterscotch Caramel Crunch.jpeg', name: 'Blueberry', price: 449, rating: 4.7 },
    { id: 18, imageSrc: '/assets/cakes/Classic Chocolate Truffle.jpeg', name: 'Strawberry', price: 399, rating: 4.5 },
    { id: 19, imageSrc: '/assets/cakes/Red Velvet Cream Cheese.jpeg', name: 'Fruit Pulp', price: 379, rating: 4.4 },
    { id: 20, imageSrc: '/assets/cakes/Classic Chocolate Truffle.jpeg', name: 'Belgian Dark', price: 499, rating: 4.9 },
    { id: 21, imageSrc: '/assets/cakes/Red Velvet Cream Cheese.jpeg', name: 'Coffee Mocha', price: 429, rating: 4.6 },
    { id: 22, imageSrc: '/assets/cakes/Classic Chocolate Truffle.jpeg', name: 'Mixed Strawberry', price: 449, rating: 4.7 },
    { id: 23, imageSrc: '/assets/cakes/Black Forest Delight.jpeg', name: 'Oreo Overload', price: 479, rating: 4.8 },
    { id: 24, imageSrc: '/assets/cakes/Pineapple Fresh Cream.jpeg', name: 'Mango Cream', price: 399, rating: 4.5 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5DC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Back Button */}
        <div className="mb-8 animate-fadeInUp">
          <BackButton />
        </div>
        
        {/* Cakes 1kg Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#4A1D1F] mb-10 animate-fadeInUp">
            Cakes 1kg
          </h1>
          
          <CardGrid
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            gap="md"
          >
            {cakes1kg.map((cake, index) => (
              <div
                key={cake.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <ProductCard
                  imageSrc={cake.imageSrc}
                  name={cake.name}
                  price={cake.price}
                  rating={cake.rating}
                />
              </div>
            ))}
          </CardGrid>
        </section>

        {/* Cakes 500g Section */}
        <section>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#4A1D1F] mb-10 animate-fadeInUp">
            Cakes 500g
          </h2>
          
          <CardGrid
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            gap="md"
          >
            {cakes500g.map((cake, index) => (
              <div
                key={cake.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <ProductCard
                  imageSrc={cake.imageSrc}
                  name={cake.name}
                  price={cake.price}
                  rating={cake.rating}
                />
              </div>
            ))}
          </CardGrid>
        </section>
      </div>
    </div>
  );
};

export default Cakes;
