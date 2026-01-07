// src/components/ChefCard/ChefCard.tsx
interface ChefCardProps {
  imageSrc: string;
  name: string;
  experience: string;
  className?: string;
}

const ChefCard = ({ imageSrc, name, experience, className = '' }: ChefCardProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="flex items-end">
        {/* Card Container - Rounded with border */}
        <div className="relative bg-[#FFF5DC] rounded-[2.5rem] overflow-visible shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#2B1B12]/80 flex-1 z-10">
          
          {/* Left Side - Name Section */}
          <div className="p-8 sm:p-10 lg:p-12 pr-40 sm:pr-52 lg:pr-64">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2B1B12] leading-tight mb-2">
              {name}
            </h3>
            <p className="text-lg sm:text-xl text-[#6B4A38] font-light">
              {experience}
            </p>
          </div>
        </div>

        {/* Chef Image - Overlapping the card (shifted right on desktop) */}
        <div className="absolute right-6 sm:right-10 lg:right-4 bottom-0 w-48 sm:w-56 lg:w-72 h-64 sm:h-72 lg:h-80 z-20">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            style={{ 
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
