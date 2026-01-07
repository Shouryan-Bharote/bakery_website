// src/components/ProductCard.tsx
interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: number;
  rating: number;
}

const ProductCard = ({ imageSrc, name, price, rating }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-[#F3EBDD] p-3 sm:p-4 w-full h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#5C3D2E] cursor-pointer">
      {/* Image with aspect ratio */}
      <div className="rounded-2xl overflow-hidden aspect-square flex-shrink-0">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content - flex-grow to fill remaining space */}
      <div className="mt-4 space-y-1.5 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-[#2B1B12] line-clamp-2">
          {name}
        </h3>

        <p className="text-base font-semibold text-[#2B1B12]">
          ₹{price}
        </p>

        {/* Rating - push to bottom */}
        <div className="flex items-center gap-1.5 text-sm text-[#8C8C8C] mt-auto pt-1">
          {/* Star icon */}
          <svg
            className="w-4 h-4 text-[#FFA500]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          <span className="text-[#555555]">
            {rating.toFixed(1)} Rating
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
