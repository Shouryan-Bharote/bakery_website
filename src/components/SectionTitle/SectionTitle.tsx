// src/components/SectionTitle/SectionTitle.tsx
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = '' }: SectionTitleProps) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Left decorative line */}
      <div className="flex-1 h-px border-b-2 border-dashed border-[#2B1B12]/30 max-w-md"></div>
      
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1B12] whitespace-nowrap">
        {children}
      </h2>
      
      {/* Right decorative line */}
      <div className="flex-1 h-px border-b-2 border-dashed border-[#2B1B12]/30 max-w-md"></div>
    </div>
  );
};

export default SectionTitle;
