// src/components/ThemeCard/ThemeCard.tsx
import { Link } from 'react-router-dom';

interface ThemeCardProps {
  imageSrc: string;
  title: string;
  bgColor?: string;
  link?: string;
  className?: string;
}

const ThemeCard = ({ 
  imageSrc, 
  title, 
  bgColor = 'bg-gray-100',
  link = '#',
  className = '' 
}: ThemeCardProps) => {
  return (
    <Link
      to={link}
      className={`group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-shadow duration-300 block ${className}`}
    >
      {/* Card Container with aspect ratio */}
      <div className={`${bgColor} aspect-[4/5] relative overflow-hidden`}>
        
        {/* Image with Gradient Overlay */}
        <div className="relative w-full h-full">
          {/* Image */}
          <img
            src={imageSrc}
            alt={title}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover will-change-transform transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ 
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
          
          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Bottom Gradient with Title */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-20 pb-8 px-8">
            <h3 className="text-white text-xl sm:text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-1">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ThemeCard;
