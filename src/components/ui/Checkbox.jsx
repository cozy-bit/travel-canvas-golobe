import React from 'react';

export default function Checkbox({
  checked,
  onChange,
  label,
  id,
  className = '',
  disabled = false,
  ...props
}) {
  const inputId = id || (label ? `cb-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <label
      htmlFor={inputId}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none text-sm text-[#112211] font-medium ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-black'
      } ${className}`}
    >
      <input
        type="checkbox"
        id={inputId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-4 h-4 rounded-xs border-gray-300 text-[#8DD3BB] accent-[#8DD3BB] focus:ring-[#8DD3BB] cursor-pointer"
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
}
