// src/components/SectionTitle/SectionTitle.tsx
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = '' }: SectionTitleProps) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Left decorative line - hidden on small mobile */}
      <div className="hidden sm:block flex-1 h-px border-b-2 border-dashed border-[#2B1B12]/30 max-w-md"></div>
      
      {/* Title - allows wrapping on mobile */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A1D1F] text-center leading-tight">
        {children}
      </h2>
      
      {/* Right decorative line - hidden on small mobile */}
      <div className="hidden sm:block flex-1 h-px border-b-2 border-dashed border-[#2B1B12]/30 max-w-md"></div>
    </div>
  );
};

export default SectionTitle;
