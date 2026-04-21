import { urlFor } from '@/lib/image'

export default function ProductCard({ 
  name, 
  image, 
  link, 
  price = null, 
  originalPrice = null, 
  rating = 0, 
  reviews = 0,
  isHotDeal = false,
  bestSeller = false 
}) {
  try {
    const imageUrl = urlFor(image)
    const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f8fafc%22 width=%22400%22 height=%22400%22/%3E%3C/svg%3E'
    
    const discountPercent = originalPrice && price ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

    if (!name || !link) return null

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200"
      >
        {/* Image Container with Badges */}
        <div className="relative overflow-hidden bg-white h-48 sm:h-44 p-4 flex items-center justify-center">
          <img
            src={imageUrl || fallbackImage}
            alt={name}
            onError={(e) => {
              e.target.src = fallbackImage
            }}
            className="max-w-full max-h-full object-contain"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {isHotDeal && (
              <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                🔥 HOT DEAL
              </div>
            )}
            {bestSeller && (
              <div className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold">
                👑 BEST SELLER
              </div>
            )}
            {discountPercent > 0 && (
              <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
                -{discountPercent}%
              </div>
            )}
          </div>

          {/* Top Right Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 shadow-md">
            ⭐ {rating > 0 ? rating.toFixed(1) : 'New'}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
            {name}
          </h3>
          
          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center gap-1 mt-2">
              <div className="flex text-yellow-400">
                {'⭐'.repeat(Math.round(rating))}
              </div>
              <span className="text-xs text-gray-600 font-medium">({reviews})</span>
            </div>
          )}

          {/* Pricing */}
          <div className="mt-3 flex items-baseline gap-2">
            {price && (
              <span className="text-base font-bold text-purple-600">₹{price.toLocaleString()}</span>
            )}
            {originalPrice && originalPrice > (price || 0) && (
              <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
            )}
            {!price && (
              <span className="text-sm text-gray-500">Contact for price</span>
            )}
          </div>

          {/* CTA Button */}
          <button className="mt-3 w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm">
            View Product
          </button>
        </div>
      </a>
    )
  } catch (error) {
    console.error('Error rendering ProductCard:', error)
    return null
  }
}