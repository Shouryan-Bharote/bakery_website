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
      className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 block ${className}`}
    >
      {/* Card Container */}
      <div className={`${bgColor} h-80 sm:h-96 relative overflow-hidden`}>
        
        {/* Cake Image */}
        <div className="absolute inset-0 p-6">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl m-6"></div>

        {/* Title at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl p-6 -m-2">
            <h3 className="text-white text-xl sm:text-2xl font-semibold transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ThemeCard;
