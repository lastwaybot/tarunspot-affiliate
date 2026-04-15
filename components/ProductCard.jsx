import { urlFor } from '@/lib/image'

export default function ProductCard({ 
  name, 
  image, 
  link, 
  price, 
  originalPrice, 
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
        className="group block cursor-pointer rounded-2xl overflow-hidden bg-white border-2 border-indigo-100 shadow-md hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-300 transition-all duration-300 hover:-translate-y-2"
      >
        {/* Image Container with Badges */}
        <div className="relative overflow-hidden bg-slate-100 h-64 sm:h-56">
          <img
            src={imageUrl || fallbackImage}
            alt={name}
            onError={(e) => {
              e.target.src = fallbackImage
            }}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Studio Lighting Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-white/0 group-hover:from-black/10 transition-all duration-300"></div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {isHotDeal && (
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded text-xs font-bold shadow-lg shadow-red-500/50">
                🔥 HOT DEAL
              </div>
            )}
            {bestSeller && (
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2 py-1 rounded text-xs font-bold shadow-lg shadow-amber-500/50">
                👑 BEST SELLER
              </div>
            )}
            {discountPercent > 0 && (
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-2 py-1 rounded text-xs font-bold shadow-lg shadow-indigo-500/50">
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
        <div className="p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate group-hover:text-indigo-600 transition-colors line-clamp-2">
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
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">₹{price.toLocaleString()}</span>
            )}
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
            )}
          </div>

          {/* CTA Button */}
          <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 text-white font-medium rounded-lg hover:shadow-xl hover:shadow-indigo-600/40 transition-all duration-300 text-sm font-semibold">
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