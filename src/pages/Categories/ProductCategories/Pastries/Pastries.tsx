// src/pages/Categories/ProductCategories/Pastries/Pastries.tsx
import ProductCard from '../../../../components/ProductCard/ProductCard';
import CardGrid from '../../../../components/ProductCard/CardGrid';
import BackButton from '../../../../components/BackButton';

const Pastries = () => {
  // Pastries 1 piece products
  const pastries1Pic = [
    { id: 1, imageSrc: '/assets/Pastries/Chocolate Truffle.jpg', name: 'Chocolate Truffle', price: 89, rating: 4.5 },
    { id: 2, imageSrc: '/assets/Pastries/Pineapple.jpg', name: 'Pineapple', price: 79, rating: 4.3 },
    { id: 3, imageSrc: '/assets/Pastries/Black Forest.jpg', name: 'Black Forest', price: 89, rating: 4.6 },
    { id: 4, imageSrc: '/assets/Pastries/Red Velvet.jpg', name: 'Red Velvet', price: 99, rating: 4.7 },
    { id: 5, imageSrc: '/assets/Pastries/Mango Mousse Pastry Box.jfif', name: 'Mango Mousse', price: 95, rating: 4.4 },
    { id: 6, imageSrc: '/assets/Pastries/Blueberry Cheesecake Pastry Box.jpg', name: 'Blueberry Cheesecake', price: 109, rating: 4.8 },
    { id: 7, imageSrc: '/assets/Pastries/Strawberry Cream Pastry Box.jpeg', name: 'Strawberry Cream', price: 99, rating: 4.5 },
    { id: 8, imageSrc: '/assets/Pastries/Butterscotch Caramel Pastry Box.jpg', name: 'Butterscotch Caramel', price: 85, rating: 4.3 },
    { id: 9, imageSrc: '/assets/Pastries/Tiramisu Pastry Box.jfif', name: 'Tiramisu', price: 119, rating: 4.9 },
    { id: 10, imageSrc: '/assets/Pastries/Custard-Filled Cream Puffs.jfif', name: 'Custard Cream Puffs', price: 89, rating: 4.2 },
    { id: 11, imageSrc: '/assets/Pastries/Pistachio Cream Pastries.jfif', name: 'Pistachio Cream', price: 95, rating: 4.6 },
    { id: 12, imageSrc: '/assets/Pastries/Mocha Coffee Pastry Box.jfif', name: 'Mocha Coffee', price: 105, rating: 4.7 },
  ];

  // Pastries 10 pieces products
  const pastries10Pic = [
    { id: 13, imageSrc: '/assets/Pastries/Chocolate Truffle.jpg', name: 'Chocolate Truffle', price: 799, rating: 4.5 },
    { id: 14, imageSrc: '/assets/Pastries/Pineapple.jpg', name: 'Pineapple', price: 699, rating: 4.3 },
    { id: 15, imageSrc: '/assets/Pastries/Black Forest.jpg', name: 'Black Forest', price: 799, rating: 4.6 },
    { id: 16, imageSrc: '/assets/Pastries/Red Velvet.jpg', name: 'Red Velvet', price: 899, rating: 4.7 },
    { id: 17, imageSrc: '/assets/Pastries/Mango Mousse Pastry Box.jfif', name: 'Mango Mousse', price: 849, rating: 4.4 },
    { id: 18, imageSrc: '/assets/Pastries/Blueberry Cheesecake Pastry Box.jpg', name: 'Blueberry Cheesecake', price: 999, rating: 4.8 },
    { id: 19, imageSrc: '/assets/Pastries/Strawberry Cream Pastry Box.jpeg', name: 'Strawberry Cream', price: 899, rating: 4.5 },
    { id: 20, imageSrc: '/assets/Pastries/Butterscotch Caramel Pastry Box.jpg', name: 'Butterscotch Caramel', price: 749, rating: 4.3 },
    { id: 21, imageSrc: '/assets/Pastries/Tiramisu Pastry Box.jfif', name: 'Tiramisu', price: 1099, rating: 4.9 },
    { id: 22, imageSrc: '/assets/Pastries/Custard-Filled Cream Puffs.jfif', name: 'Custard Cream Puffs', price: 799, rating: 4.2 },
    { id: 23, imageSrc: '/assets/Pastries/Pistachio Cream Pastries.jfif', name: 'Pistachio Cream', price: 849, rating: 4.6 },
    { id: 24, imageSrc: '/assets/Pastries/Mocha Coffee Pastry Box.jfif', name: 'Mocha Coffee', price: 949, rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5DC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Back Button */}
        <div className="mb-8 animate-fadeInUp">
          <BackButton />
        </div>

        {/* Pastries 1 pic Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#4A1D1F] mb-10 animate-fadeInUp">
            Pastries (1 pic)
          </h1>
          
          <CardGrid
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            gap="md"
          >
            {pastries1Pic.map((pastry, index) => (
              <div
                key={pastry.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <ProductCard
                  imageSrc={pastry.imageSrc}
                  name={pastry.name}
                  price={pastry.price}
                  rating={pastry.rating}
                />
              </div>
            ))}
          </CardGrid>
        </section>

        {/* Pastries 10 pic Section */}
        <section>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#4A1D1F] mb-10 animate-fadeInUp">
            Pastries (10 pic)
          </h2>
          
          <CardGrid
            columns={{ mobile: 2, tablet: 3, desktop: 4 }}
            gap="md"
          >
            {pastries10Pic.map((pastry, index) => (
              <div
                key={pastry.id}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards',
                }}
              >
                <ProductCard
                  imageSrc={pastry.imageSrc}
                  name={pastry.name}
                  price={pastry.price}
                  rating={pastry.rating}
                />
              </div>
            ))}
          </CardGrid>
        </section>
      </div>
    </div>
  );
};

export default Pastries;
