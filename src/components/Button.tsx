// src/components/Button.tsx
import { useNavigate } from 'react-router-dom';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  navigateTo?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const Button = ({ 
  children, 
  onClick, 
  navigateTo,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  type = 'button',
  ...props 
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };

  // Base styles
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-[#5C3D2E] text-[#F5E6D3] hover:bg-[#6B4A38] active:bg-[#4D3225]',
    secondary: 'bg-[#F5E6D3] text-[#41291F] hover:bg-[#E8D5BE] active:bg-[#DBC4A7]',
    outline: 'bg-transparent border-2 border-[#5C3D2E] text-[#5C3D2E] hover:bg-[#5C3D2E] hover:text-[#F5E6D3]',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
