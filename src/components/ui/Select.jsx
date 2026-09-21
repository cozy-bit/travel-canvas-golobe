import React from 'react';

export default function Select({
  label,
  value,
  onChange,
  options = [],
  icon = null,
  error = '',
  className = '',
  containerClassName = '',
  disabled = false,
  ...props
}) {
  return (
    <div className={`relative flex flex-col ${containerClassName}`}>
      <div className={`relative flex items-center border rounded-sm transition-colors duration-200 bg-white dark:bg-[#141F1A] ${
        error
          ? 'border-red-500'
          : 'border-[#79747E]/40 dark:border-[#2D3D36] focus-within:border-[#8DD3BB] dark:focus-within:border-[#8DD3BB] focus-within:ring-2 focus-within:ring-[#8DD3BB]/30'
      }`}>
        {icon && (
          <div className="pl-3.5 pr-1 text-gray-500 dark:text-gray-400 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        <div className="relative flex-1 py-1.5 px-3">
          {label && (
            <label className="block text-[11px] font-medium text-gray-500 dark:text-gray-400 tracking-wide select-none">
              {label}
            </label>
          )}
          <select
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`w-full bg-transparent text-sm text-[#112211] dark:text-[#F3F4F6] font-medium focus:outline-none cursor-pointer ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white text-[#112211] dark:bg-[#141F1A] dark:text-[#F3F4F6]">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <span className="text-xs text-red-500 mt-1 font-medium">{error}</span>
      )}
    </div>
  );
}
