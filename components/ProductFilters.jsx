'use client';

import { useState, useEffect } from 'react';

export default function ProductFilters({ filters, onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({});

  // Call parent callback when filters change
  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  if (!filters || filters.length === 0) {
    return null;
  }

  const handleFilterChange = (filterTitle, option, isChecked) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };

      if (isChecked) {
        if (!updated[filterTitle]) {
          updated[filterTitle] = [];
        }
        updated[filterTitle].push(option);
      } else {
        updated[filterTitle] = updated[filterTitle].filter((val) => val !== option);
        if (updated[filterTitle].length === 0) {
          delete updated[filterTitle];
        }
      }

      return updated;
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  const activeFilterCount = Object.values(selectedFilters).reduce(
    (count, values) => count + values.length,
    0
  );

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm h-fit sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={handleClearFilters}
            className="text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            Clear All ({activeFilterCount})
          </button>
        )}
      </div>

      <div className="space-y-6">
        {filters.map((filter) => (
          <div key={filter._id} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
            <h4 className="text-base font-semibold text-gray-900 mb-3">{filter.title}</h4>
            <div className="space-y-2">
              {filter.options && filter.options.length > 0 ? (
                filter.options.map((option) => (
                  <label
                    key={`${filter._id}-${option}`}
                    className="flex items-center cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters[filter.title]?.includes(option) || false}
                      onChange={(e) =>
                        handleFilterChange(filter.title, option, e.target.checked)
                      }
                      className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                    />
                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                      {option}
                    </span>
                  </label>
                ))
              ) : (
                <p className="text-sm text-gray-500">No options available</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
