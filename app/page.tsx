'use client';

import { useEffect, useState, useCallback } from 'react';
import { getProducts, getFilters, getProductsByFilters, searchAndFilterProducts } from '@/lib/sanity';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [filters, setFilters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
      const filteredProducts = await searchAndFilterProducts(searchTerm, newFilters);
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error filtering products:', error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  const handleSearch = useCallback(async (term: string) => {
    setSearchTerm(term);
    setLoading(true);
    try {
      if (term.trim() === '') {
        const productsData = await getProducts();
        setProducts(productsData);
      } else {
        const searchResults = await searchAndFilterProducts(term, {});
        setProducts(searchResults);
      }
    } catch (error) {
      console.error('Error searching products:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Hero Section */}
        <div className="mb-16 relative">
          {/* Decorative blobs */}


          <div className="relative space-y-6 mb-8">
            {/* Niche tagline badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              Trusted picks. No fake reviews.
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Best Deals on{' '}
              <span className="text-purple-600">
                Tech &amp; Gadgets
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
              Find the best products with honest reviews and smart recommendations. Save money and choose the right product easily.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#products"
              className="px-8 py-3 font-semibold text-white rounded-lg transition-opacity duration-200 hover:opacity-90"
              style={{ background: '#9333ea' }}
            >
              View Best Deals
            </a>
            <a
              href="#products"
              className="px-8 py-3 font-semibold text-gray-700 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Explore Products
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Scroll to explore
          </div>
        </div>

        {/* Products Section with Filters */}
        <div id="products">
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-6 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-600 text-gray-900 placeholder-gray-500"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

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
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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
