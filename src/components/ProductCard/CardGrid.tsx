// src/components/CardGrid.tsx
import type { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  columns?: {
    mobile?: 1 | 2;
    tablet?: 2 | 3;
    desktop?: 3 | 4 | 5 | 6;
  };
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CardGrid = ({ 
  children, 
  columns = { mobile: 1, tablet: 2, desktop: 4 },
  gap = 'md',
  className = ''
}: CardGridProps) => {
  // Column class mapping
  const colClasses = {
    mobile: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
    },
    tablet: {
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-3',
    },
    desktop: {
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
      5: 'lg:grid-cols-5',
      6: 'lg:grid-cols-6',
    },
  };

  // Gap class mapping
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  const mobileCol = colClasses.mobile[columns.mobile || 1];
  const tabletCol = colClasses.tablet[columns.tablet || 2];
  const desktopCol = colClasses.desktop[columns.desktop || 4];

  return (
    <div className={`grid ${mobileCol} ${tabletCol} ${desktopCol} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default CardGrid;
