import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  leftIcon = null,
  rightIcon = null,
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const variants = {
    primary: 'bg-[#8DD3BB] text-[#112211] hover:bg-[#7BC6AE] active:bg-[#68b8a0]',
    secondary: 'border border-[#8DD3BB] text-[#112211] hover:bg-[#8DD3BB]/15',
    dark: 'bg-[#112211] text-white hover:bg-[#1f381f]',
    white: 'bg-white text-[#112211] hover:bg-gray-50 border border-gray-200 shadow-xs',
    outline: 'border border-[#112211] text-[#112211] hover:bg-[#112211] hover:text-white',
    ghost: 'bg-transparent text-[#112211] hover:bg-black/5',
    danger: 'bg-[#FF8682] text-white hover:bg-[#ff6f6a]',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 font-medium',
    md: 'text-sm px-4 py-2.5 gap-2 font-semibold',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
}
