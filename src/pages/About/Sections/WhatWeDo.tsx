// src/pages/About/Sections/WhatWeDo.tsx
const features = [
  {
    id: 1,
    title: "Oven-fresh baked goods,",
    titleBold: "baked just for you",
    description: "We bake delicious treats with the finest ingredients. From warm chocolate chip cookies to flaky croissants, every bite is filled with warmth and flavor. Come experience the magic of our bakery.",
    imageSrc: "/assets/cakes/Classic Chocolate Truffle.jpeg",
    imagePosition: "right" as const,
  },
  {
    id: 2,
    title: "Oven-fresh baked goods,",
    titleBold: "baked just for you",
    description: "We bake delicious treats with the finest ingredients. From warm chocolate chip cookies to flaky croissants, every bite is filled with warmth and flavor. Come experience the magic of our bakery.",
    imageSrc: "/assets/cakes/Classic Chocolate Truffle.jpeg",
    imagePosition: "left" as const,
  },
  {
    id: 3,
    title: "Freshly Baked Delights,",
    titleBold: "Delivered with Care",
    description: "We deliver freshly baked goods to your doorstep, ensuring they arrive hot and delicious. Our skilled bakers use high-quality ingredients to craft each item with care. Enjoy the convenience of our fast and reliable delivery service.",
    imageSrc: "/assets/cakes/Classic Chocolate Truffle.jpeg",
    imagePosition: "right" as const,
  },
];

const WhatWeDo = () => {
  return (
    <section className="w-full bg-[#FFF5DC] py-16 lg:py-20">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        
        {/* Section Title with Hand-drawn Underline */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A1D1F] mb-6">
            What we do
          </h2>
          
          {/* Hand-drawn style underlines */}
          <div className="flex justify-center">
            <div className="relative w-96 h-12">
              {/* Top long curve */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#4A1D1F] rounded-full" 
                   style={{ transform: 'rotate(-1deg)' }}></div>
              
              {/* Middle long curve - slightly offset */}
              <div className="absolute top-3 left-8 right-2 h-1.5 bg-[#4A1D1F] rounded-full" 
                   style={{ transform: 'rotate(1deg)' }}></div>
              
              {/* Bottom shorter curve */}
              <div className="absolute top-6 left-20 right-24 h-1.5 bg-[#4A1D1F] rounded-full" 
                   style={{ transform: 'rotate(-0.5deg)' }}></div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-16 lg:space-y-24">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                feature.imagePosition === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div
                className={`${
                  feature.imagePosition === "left" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#4A1D1F] mb-6">
                  {feature.title}
                  <br />
                  <span className="font-bold inline-block relative">
                    {feature.titleBold}
                    {/* Underline beneath bold text */}
                    <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-[#4A1D1F]"></span>
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-[#6B4A38] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div
                className={`${
                  feature.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="w-full max-w-md mx-auto lg:mx-0">
                  <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="w-full h-auto rounded-3xl shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
