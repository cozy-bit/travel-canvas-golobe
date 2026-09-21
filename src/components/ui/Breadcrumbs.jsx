import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items = [], className = '' }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 ${className}`}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-1.5 text-gray-400 dark:text-gray-500 shrink-0" />}
              {isLast ? (
                <span className="font-semibold text-[#FF8682] truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-[#112211] dark:hover:text-white hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
