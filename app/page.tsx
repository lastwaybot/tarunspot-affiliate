'use client';

import { useEffect, useState, useCallback } from 'react';
import { getProducts, getFilters, getProductsByFilters } from '@/lib/sanity';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, filtersData] = await Promise.all([
          getProducts(),
          getFilters(),
        ]);
        setProducts(productsData);
        setFilters(filtersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = useCallback(async (newFilters: Record<string, string[]>) => {
    setLoading(true);
    try {
      const filteredProducts = await getProductsByFilters(newFilters);
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error filtering products:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Premium <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Curated</span> Products
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Discover handpicked, high-quality products at the best prices. Your trusted marketplace for everything you need.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Explore Products
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Products Section with Filters */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600 mb-12">Browse our collection of handpicked items</p>

          <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Filters Sidebar */}
            {filters.length > 0 && (
              <div className="lg:col-span-1">
                <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
              </div>
            )}

            {/* Products Grid */}
            <div className={filters.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}>
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-teal-600 rounded-full"></div>
                  </div>
                </div>
              ) : products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      name={product.name}
                      image={product.image}
                      link={product.link}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="text-5xl mb-4">📦</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                  <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
