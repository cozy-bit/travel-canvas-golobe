import React from 'react';

export default function Input({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  icon = null,
  rightIcon = null,
  error = '',
  className = '',
  containerClassName = '',
  disabled = false,
  required = false,
  ...props
}) {
  return (
    <div className={`relative flex flex-col ${containerClassName}`}>
      <div className={`relative flex items-center border rounded-sm transition-colors duration-200 bg-white ${
        error ? 'border-red-500 focus-within:border-red-500' : 'border-[#79747E]/40 focus-within:border-[#8DD3BB] focus-within:ring-2 focus-within:ring-[#8DD3BB]/30'
      }`}>
        {icon && (
          <div className="pl-3.5 pr-1 text-gray-500 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        <div className="relative flex-1 py-1.5 px-3">
          {label && (
            <label className="block text-[11px] font-medium text-gray-500 tracking-wide select-none">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}
          <input
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-full bg-transparent text-sm text-[#112211] font-medium placeholder-gray-400 focus:outline-none disabled:cursor-not-allowed ${className}`}
            {...props}
          />
        </div>

        {rightIcon && (
          <div className="pr-3.5 pl-1 text-gray-500 flex items-center">
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <span className="text-xs text-red-500 mt-1 font-medium">{error}</span>
      )}
    </div>
  );
}
